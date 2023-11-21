import { Injectable } from '@angular/core';
import { BasicInfoModel } from '../../Models/basicInfo/basicInfoModel';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoService {
  private basicInfoData: BasicInfoModel[] = [
    {
      label: "DATE OF BIRTH",
      value: "13/04/2003"
    },
    {
      label: "EMAIL",
      value: "dimostheocharis10@gmail.com"
    },
    {
      label: "PHONE",
      value: "6955215169"
    },
    {
      label: "LOCATION",
      value: "Thessaloniki, Greece"
    },
    {
      label: "UNIVERSITY",
      value: "Department of Informatics, Aristotle University of Thessaloniki"
    },
    {
      label: "LANGUAGE",
      value: "Greek, English"
    }
  ]

  constructor() { }

  public getBasicInfo(): BasicInfoModel[] {
    return this.basicInfoData;
  }
}
