//
//  PresidentModel.swift
//  InfoWar
//
//  Created by Serhat  Şimşek  on 4.01.2024.
//

import Foundation

struct PresidentModel: Decodable {
    let id, presidentId, firstName, lastName: String?
    let age: Int?
    let presidentInfo: String?
    let presidentImage: String?
}
