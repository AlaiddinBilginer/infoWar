//
//  LocalDataWarsDetailVC.swift
//  InfoWar
//
//  Created by Serhat  Şimşek  on 12.01.2024.
//

import UIKit

class LocalDataWarsDetailVC: UIViewController, CollectionViewIslemleriOutputProtocol {
    
    @IBOutlet weak var warNameLabel: UILabel!
    @IBOutlet weak var warInfoTextView: UITextView!
    @IBOutlet weak var totalDeath: UILabel!
    @IBOutlet weak var deathsKidSideA: UILabel!
    @IBOutlet weak var progressKidsSideA: UIProgressView!
    @IBOutlet weak var deathsAdultsideA: UILabel!
    @IBOutlet weak var progressAdultSideA: UIProgressView!
    @IBOutlet weak var deathsSoldierSideA: UILabel!
    @IBOutlet weak var progressSoldierSideA: UIProgressView!
    @IBOutlet weak var nameUlkeA: UILabel!
    @IBOutlet weak var deathsKidSideB: UILabel!
    @IBOutlet weak var progressKidSideB: UIProgressView!
    @IBOutlet weak var deathsAdultSideB: UILabel!
    @IBOutlet weak var progressAdultSideB: UIProgressView!
    @IBOutlet weak var deathsSoldierSideB: UILabel!
    @IBOutlet weak var progressSoldierSideB: UIProgressView!
    @IBOutlet weak var nameCountrySideB: UILabel!
    
    private let jsonService: InfoWarLocalApiService = InfoWarLocalApiService()
    var selectedWar: WarsModel?
    var selectedCountry: [CountriesModel] = []
    var selectedStatistics: [StatisticsModel] = []
    override func viewDidLoad() {
        super.viewDidLoad()
        setupProperiesValue()
        fetcData()
        tabBarController?.tabBar.isHidden = true
    }
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        tabBarController?.tabBar.isHidden = false
    }
    func onSelectedWar(items: WarsModel) {
        selectedWar = items
    }
    func setupProperiesValue(){
        warNameLabel.text = selectedWar?.warName
        warInfoTextView.text = selectedWar?.warInfo
        nameUlkeA.text = selectedWar?.countrySideA
        deathsKidSideA.text = "\(selectedWar?.deathsKidSideA ?? 0)"
        deathsAdultsideA.text = "\(selectedWar?.deathsAdultSideA ?? 0)"
        deathsSoldierSideA.text = "\(selectedWar?.deathsSoldierSideA ?? 0)"
        nameCountrySideB.text = selectedWar?.countrySideB
        deathsKidSideB.text = "\(selectedWar?.deathsKidSideB ?? 0)"
        deathsAdultSideB.text = "\(selectedWar?.deathsAdultSideB ?? 0)"
        deathsSoldierSideB.text = "\(selectedWar?.deathsSoldierSideB ?? 0)"
    }
    func setupProgressBar(){
        
    }
    func fetcData(){
        //        jsonService.readJsonfCountriesFile()
        jsonService.readJsonfStatisticsFile()
        //        var selectedWarId = selectedWar?.warId
        //        for i in jsonService.statisticsItems {
        //            if i.statisticsWarId == selectedWarId {
        //                selectedStatistics.append(i)
        //            }
        
        //        print(selectedStatistics)
        
    }
    
    func onSelectedStatistics(items: StatisticsModel) {
        
    }
    
    func onSelectedCountries(items: CountriesModel) {
        
    }
}
