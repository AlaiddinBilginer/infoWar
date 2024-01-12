//
//  StatisticsModel.swift
//  InfoWar
//
//  Created by Serhat  Şimşek  on 4.01.2024.
//

import Foundation

struct StatisticsModel: Decodable {
    let id, statisticsId: String?
    let childDeath, soldierDeath, adultDeath, injured: Int?
    let statisticsCountryId, statisticsWarId: String?
}
