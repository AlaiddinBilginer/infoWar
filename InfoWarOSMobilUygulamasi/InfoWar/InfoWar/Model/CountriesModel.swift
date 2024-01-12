//
//  CountryiesModel.swift
//  InfoWar
//
//  Created by Serhat  Şimşek  on 4.01.2024.
//

import Foundation

struct CountriesModel: Decodable {
    let id, countryId, countryInfo, countryName: String?
    let establishment, population, region: String?
    let countryImage: String?
    let countryPresidentId: String?
}
