//
//  InfoWarLocalApiService.swift
//  InfoWar
//
//  Created by Serhat  Şimşek  on 11.01.2024.
//

import Foundation

class InfoWarLocalApiService {
    public var warItems: [WarsModel] = []
    public var statisticsItems: [StatisticsModel] = []
    
    func readJsonfWarsFile(){
        if let path = Bundle.main.path(forResource: "wars", ofType: "txt") {
            do {
                let data = try Data(contentsOf: URL(fileURLWithPath: path), options: .mappedIfSafe)
                do {
                    let jsonDecoder = JSONDecoder()
                    jsonDecoder.keyDecodingStrategy = .convertFromSnakeCase
                    let warsResult = try jsonDecoder.decode([WarsModel].self, from: data)
                    print(warsResult.first!.warName ?? "empty")
                    warItems = warsResult
                } catch {
                    print(error)
                }
            } catch {
                // Hata işleme kodları
                print("JSON dosyası okunurken bir hata oluştu: \(error)")
            }
        }

    }
    func readJsonfStatisticsFile(){
        if let path = Bundle.main.path(forResource: "statistics", ofType: "txt") {
            do {
                let data = try Data(contentsOf: URL(fileURLWithPath: path), options: .mappedIfSafe)
                do {
                    let jsonDecoder = JSONDecoder()
                    jsonDecoder.keyDecodingStrategy = .convertFromSnakeCase
                    let staticsResult = try jsonDecoder.decode([StatisticsModel].self, from: data)
                    print(staticsResult.first!)
                    statisticsItems = staticsResult
                } catch {
                    print(error)
                }
            } catch {
                // Hata işleme kodları
                print("JSON dosyası okunurken bir hata oluştu: \(error)")
            }
        }

    }
    func readJsonfCountriesFile(){
        if let path = Bundle.main.path(forResource: "countries", ofType: "txt") {
            do {
                let data = try Data(contentsOf: URL(fileURLWithPath: path), options: .mappedIfSafe)
                do {
                    let jsonDecoder = JSONDecoder()
                    jsonDecoder.keyDecodingStrategy = .convertFromSnakeCase
                    let countriesResult = try jsonDecoder.decode([CountriesModel].self, from: data)
                    print(countriesResult.first!)
                    
                } catch {
                    print(error)
                }
            } catch {
                // Hata işleme kodları
                print("JSON dosyası okunurken bir hata oluştu: \(error)")
            }
        }
    }
    func readJsonfPresidentFile(){
        if let path = Bundle.main.path(forResource: "presidents", ofType: "txt") {
            do {
                let data = try Data(contentsOf: URL(fileURLWithPath: path), options: .mappedIfSafe)
                do {
                    let jsonDecoder = JSONDecoder()
                    jsonDecoder.keyDecodingStrategy = .convertFromSnakeCase
                    let presindentResult = try jsonDecoder.decode([PresidentModel].self, from: data)
                    print(presindentResult.first!)
                    
                } catch {
                    print(error)
                }
            } catch {
                // Hata işleme kodları
                print("JSON dosyası okunurken bir hata oluştu: \(error)")
            }
        }

    }
}
