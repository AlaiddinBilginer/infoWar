//
//  APICaller.swift
//  InfoWar
//
//  Created by Serhat  Şimşek  on 10.01.2024.
//

import SwiftOpenAI
import OpenAISwift
import Foundation

final class InfoWarChatGptAPICaller {
    let openAIUrl =  URL(string: "https://api.openai.com/v1/engines/davinci/completions")
    var openAIKey: String {
        return Config.openAIKey
    }
    
    private func executeRequest(request: URLRequest, withSessionConfig sessionConfig: URLSessionConfiguration?) -> Data? {
        let semaphore = DispatchSemaphore(value: 0)
        let session: URLSession
        
        if(sessionConfig != nil) {
            session = URLSession(configuration: sessionConfig!)
        } else {
            session = URLSession.shared
        }
        
        var requestData: Data?
        let task = session.dataTask(with: request as URLRequest, completionHandler:{ (data: Data?, response: URLResponse?, error: Error?) -> Void in
            
            if error != nil {
                print("error: \(error!.localizedDescription)")
            } else if data != nil {
                requestData = data
            }
            print("semaphore signalled")
            semaphore.signal()
        })
        task.resume()
        let timeout = DispatchTime.now() + .seconds(20)
        print("waiting for semaphore signal")
        let retVal = semaphore.wait(timeout: timeout)
        print("Done waiting, obtained - \(retVal)")
        return requestData
    }
    public func processPrompt(prompt: String) -> Optional<String> {
        var request = URLRequest(url: self.openAIUrl!)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.addValue("Bearer \(self.openAIKey)", forHTTPHeaderField: "Authorization")
        let httpBody: [String: Any] = [
            "promt": prompt,
            "max_tokens": 100
        ]
        var httpBodyJson: Data
        do {
            httpBodyJson = try  JSONSerialization.data(withJSONObject: httpBody, options: .prettyPrinted)
        } catch {
            print("Unable to convert to Json \(error)")
            return nil
        }
        request.httpBody = httpBodyJson
        if let requestData = executeRequest(request: request, withSessionConfig: nil) {
            let jsonStr = String(data: requestData, encoding: String.Encoding(rawValue: String.Encoding.utf8.rawValue))!
            print(jsonStr)
            let responseHandler = OpenAIResponseHandler()
            return responseHandler.decodeJson(jsonString: jsonStr)?.choices[0].text
            
        }
        return nil
    }
}

struct OpenAIResponseHandler {
    func decodeJson(jsonString: String) -> OpenAIResponse? {
        let json = jsonString.data(using: .utf8)!
        let decoder = JSONDecoder()
        do {
            let product = try decoder.decode(OpenAIResponse.self, from: json)
            return product
        } catch {
            print("Error decoding  OpenAI API Response")
        }
        return nil
    }
}

struct OpenAIResponse: Codable {
    var id: Int
    var object: String
    var created: Int
    var model: String
    var choices: [Choice]
}

struct Choice: Codable {
    var text: String
    var index: Int
    var logrobs: String?
    var finish_reason: String
}

//final class APICaller {
//    let openAIUrl =  URL(string: "https://api.openai.com/v1/engines/text-davinci-002/completions")
//    var openAIKey: String {
//        return "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"
//    }
//}
//
//final class APICaller {
//    static let shared =  APICaller()
//
//    @frozen enum Constants {
//        static let key = "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"
//    }
//
//    private var client: OpenAISwift?
//
//    private init() {}
//
//    public func setup() {
//        let config: OpenAISwift.Config = .makeDefaultOpenAI(apiKey: Constants.key)
//        client = OpenAISwift(config: config) // Initialize OpenAI
//      }
//
//    public func getResponse(input: String, completion: @escaping (Result<String, Error>) -> Void) {
//        client?.sendCompletion(with: input, completionHandler: { result in
//            switch result {
//            case .success(let model):
//                let output = model.choices?.first?.text ?? ""
//                completion(.success(output))
//            case .failure(let error):
//                print(error.localizedDescription)
//                completion(.failure(error))
//            }
//        })
//    }
//}
