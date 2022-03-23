import React, { useEffect } from "react";
import { Platform } from "react-native";

export default class Api {
  static baseUrl = "https://swapi.dev/api/";
}


export const PeopleApi = async () => {
  
    return new Promise(async (resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
  
      fetch(Api.baseUrl + "people/", requestOptions)
        .then((res) => resolve(res.json()))
        .catch((err) => reject(err));
    });
  };
  
  export const PlanetsApi = async () => {
    return new Promise(async (resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
  
      fetch(Api.baseUrl + "planets/", requestOptions)
        .then((res) => resolve(res.json()))
        .catch((err) => reject(err));
    });
  };

  export const StarShipApi = async () => {
    return new Promise(async (resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
  
      fetch(Api.baseUrl + "starships/", requestOptions)
        .then((res) => resolve(res.json()))
        .catch((err) => reject(err));
    });
  };
  
