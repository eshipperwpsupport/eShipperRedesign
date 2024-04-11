export async function getreceiverlocation({ postalCode, country }) {
  var zip_in = postalCode;
  var country = country.toLowerCase();
  if (zip_in.length >= 3) {
    if (country === "ca") {
      zip_in = zip_in.slice(0, 3);
    }
    let url = `https://api.zippopotam.us/${country}/${zip_in}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      data = data.places[0];
      let city = data["place name"];
      let state = data["state abbreviation"];
      return { city, state };
    } catch (error) {
      // console.error(error);
      return null;
    }
  } else {
    return null;
  }
}

export function updateFreightClass({ length, width, height, weight }) {
  let cubicFeet = (length / 12) * (width / 12) * (height / 12);
  let density = Math.round((weight / cubicFeet) * 100) / 100;
  return calculateFreightclass(density);
}

function calculateFreightclass(value) {
  //var densityValue =  Math.ceil( value );
  var densityValue = value;
  var fclass = 0;
  //alert ('calculateFreightclass density value : ' + densityValue + '  value : ' + value );
  if (densityValue >= 50) {
    fclass = 50;
  }
  if (densityValue >= 35 && densityValue < 50) {
    fclass = 55;
    // alert ('fclass : 55 value : ' + value );
  }
  if (densityValue >= 30 && densityValue < 35) {
    fclass = 60;
    // alert ('fclass : 60 value : ' + value );
  }
  if (densityValue >= 22.5 && densityValue < 30) {
    fclass = 65;
    // alert ('fclass : 65 value : ' + value );
  }
  if (densityValue >= 15 && densityValue < 22.5) {
    fclass = 70;
    // alert ('fclass : 70 value : ' + value );
  }
  if (densityValue >= 13.5 && densityValue < 15) {
    fclass = 77.5;
    // alert ('fclass : 77.5 value : ' + value );
  }
  if (densityValue >= 12 && densityValue < 13.5) {
    fclass = 85;
  }
  if (densityValue >= 10.5 && densityValue < 12) {
    fclass = 92.5;
    // alert ('fclass : 92.5 value : ' + value );
  }
  if (densityValue >= 9 && densityValue < 10.5) {
    fclass = 100;
    // alert ('fclass : 100 value : ' + value );
  }
  if (densityValue >= 8 && densityValue < 9) {
    fclass = 110;
    //  alert ('fclass : 110 value : ' + value );
  }
  if (densityValue >= 7 && densityValue < 8) {
    fclass = 125;
    // alert ('fclass : 125 value : ' + value );
  }
  if (densityValue >= 6 && densityValue < 7) {
    fclass = 150;
    // alert ('fclass : 55 value : ' + value );
  }
  if (densityValue >= 5 && densityValue < 6) {
    fclass = 175;
    // alert ('fclass : 175 value : ' + value );
  }
  if (densityValue >= 4 && densityValue < 5) {
    fclass = 200;
    //  alert ('fclass : 200 value : ' + value );
  }
  if (densityValue >= 3 && densityValue < 4) {
    fclass = 250;
    // alert ('fclass : 250 value : ' + value );
  }
  if (densityValue >= 2 && densityValue < 3) {
    fclass = 300;
    //  alert ('fclass : 300 value : ' + value );
  }
  if (densityValue >= 1 && densityValue < 2) {
    fclass = 400;
    // alert ('fclass : 400 value : ' + value );
  }
  if (densityValue < 1) {
    fclass = 500;
    //  alert ('fclass : 500 value : ' + value );
  }
  return fclass;
}

/*

customerInfo = {
    package_quantity: "",
    package_type: "",

    SenderCountry: "",
    SenderCity: "",
    SenderProvince: "",
    SenderPostalCode: "",
    tailgate_sender: "",
    residential_sender: "",

    ReceiverCountry: "",
    ReceiverCity: "",
    ReceiverProvince: "",
    ReceiverPostalCode: "",
    residential_receiver: "",
    tailgate_receiver: "",

    length1: '',
    width1: '',
    height1: '',
    weight1: '',
    "freight-class1": ''
  },

*/

export async function eshipperQuote(customerInfo) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/xml");
  myHeaders.append("Cookie", "JSESSIONID=1BA66B6FAB17EADC637239EEA90BD89E");
  let package_quantity = customerInfo["package_quantity"];
  let packageType = customerInfo["package_type"];
  let shipment = "";
  let newPackage = "";
  for (let index = 1; index <= package_quantity; index++) {
    if (packageType === "Pallet") {
      newPackage = `<Package length="${
        customerInfo[`length${index}`]
      }" width="${customerInfo[`width${index}`]}" height="${
        customerInfo[`height${index}`]
      }" weight="${customerInfo[`weight${index}`]}" freightClass="${
        customerInfo[`freight-class${index}`]
      }" nmfcCode="123456" insuranceAmount="0.0" codAmount="0.0"  type="Pallet" description="description"/>`;
      shipment = shipment.concat(newPackage);
    } else if (packageType === "Package") {
      newPackage = `<Package length="${
        customerInfo[`length${index}`]
      }" width="${customerInfo[`width${index}`]}" height="${
        customerInfo[`height${index}`]
      }" weight="${
        customerInfo[`weight${index}`]
      }" freightClass="" nmfcCode="123456" insuranceAmount="0.0" codAmount="0.0"  type="Package" description="description"/>`;

      shipment = shipment.concat(newPackage);
    } else {
      newPackage = `<Package length="1" width="1" height="1" weight="${
        customerInfo[`weight${index}`]
      }" freightClass="" nmfcCode="123456" insuranceAmount="0.0" codAmount="0.0" description="description"/>`;
      shipment = shipment.concat(newPackage);
    }
  }

  // console.log("package", package);
  var raw = `<\?xml version="1.0" encoding="UTF-8"?>
    <EShipper xmlns="http://www.eshipper.net/XMLSchema" username="webquotes2017" password="webquotes2017" version="3.0.0">
        <QuoteRequest serviceId="0" stackable="true">
            <From id="123" company="test from company" address1="Address"
                    city="${customerInfo["SenderCity"]}" state="${customerInfo["SenderProvince"]}" zip="${customerInfo["SenderPostalCode"]}" country="${customerInfo["SenderCountry"]}" phone="65323256562" attention="jp"
                    email="jp@email.com" residential="${customerInfo["residential_sender"]}" tailgateRequired="${customerInfo["tailgate_sender"]}"/>
            <To company="test to company" address1="Address" city="${customerInfo["ReceiverCity"]}" state="${customerInfo["ReceiverProvince"]}" zip="${customerInfo["ReceiverPostalCode"]}" country="${customerInfo["ReceiverCountry"]}" phone="65323256562" attention="jp"
                email="jp@email.com" residential="${customerInfo["residential_receiver"]}" tailgateRequired="${customerInfo["tailgate_receiver"]}"/>
            <Packages type="${customerInfo["package_type"]}">
                ${shipment}
            </Packages>
        </QuoteRequest>
    </EShipper>`;

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let prices = {
    ["air"]: null,
    ["airTotal"]: null,
    ["ground"]: null,
    ["groundTotal"]: null,
    ["smartepost"]: null,
    ["smartepostTotal"]: null,
  };

  return await fetch("https://web.eshipper.com/rpc2", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      // console.log(result);

      let air = true;
      let ground = true;
      let smartepost = true;

      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(result, "text/xml");
      let QuoteReply = xmlDoc.getElementsByTagName("QuoteReply")[0];
      let QuoteID = QuoteReply.getAttribute("quoteId");
      // console.log(QuoteReply);
      let Quote = Array.from(QuoteReply.children);
      const smartpostServiceIds = [
        "3500",
        "3501",
        "3502",
        "3503",
        "3504",
        "3505",
        "3506",
        "3507",
        "3508",
        "5100",
        "5201",
        "5202",
        "5203",
        "5204",
        "5205",
        "5206",
        "5207",
        "5208",
        "5209",
        "5210",
      ];
      const groundServiceIds = [
        "3",
        "13",
        "19",
        "20",
        "108",
        "604",
        "608",
        "3602",
        "3700",
        "4500",
      ];
      const taxes = ["GST", "HST", "QST", "PST"];

      Quote.forEach((quote, index) => {
        let baseCharge = quote.getAttribute("baseCharge");
        baseCharge = +baseCharge;
        let totalCharge = quote.getAttribute("totalCharge");
        let transitDays = quote.getAttribute("transitDays");
        let fuelCharge = quote.getAttribute("fuelSurcharge");
        let modeTransport = quote.getAttribute("modeTransport");
        let serviceID = quote.getAttribute("serviceId");
        let tax = 0;

        if (quote.childElementCount >= 1) {
          let surcharge = Array.from(quote.children);
          surcharge.forEach((surcharge, index) => {
            if (!taxes.includes(surcharge.getAttribute("name"))) {
              let newbaseCharge = surcharge.getAttribute("amount");
              newbaseCharge = +newbaseCharge;
              baseCharge = baseCharge + newbaseCharge;
            } else {
              tax = tax + +surcharge.getAttribute("amount");
            }
          });
        }

        if (air && modeTransport === "A") {
          air = false;
          prices["air"] = baseCharge;
        }
        if (ground && modeTransport === "G") {
          ground = false;
          prices["ground"] = baseCharge;
        }
        if (smartepost && smartpostServiceIds.includes(serviceID)) {
          smartepost = false;
          prices["smartepost"] = baseCharge;
        }

        // console.log("BaseCharge", modeTransport, baseCharge);
        if (packageType === "Pallet" && baseCharge <= prices["ground"]) {
          prices["ground"] = baseCharge;
          prices["groundTotal"] = +totalCharge;
          prices["ground_fuel"] = +fuelCharge;
          prices["ground_taxes"] = tax;
          prices["ground_transitDays"] = transitDays;
        } else if (modeTransport === "A" && baseCharge <= prices["air"]) {
          prices["air"] = baseCharge;
          prices["airTotal"] = +totalCharge;
          prices["air_fuel"] = +fuelCharge;
          prices["air_taxes"] = tax;
          prices["air_transitDays"] = transitDays;
        } else if (modeTransport === "G" && baseCharge <= prices["ground"]) {
          prices["ground"] = baseCharge;
          prices["groundTotal"] = +totalCharge;
          prices["ground_fuel"] = +fuelCharge;
          prices["ground_taxes"] = tax;
          prices["ground_transitDays"] = transitDays;
        } else if (
          smartpostServiceIds.includes(serviceID) &&
          baseCharge <= prices["smartepost"]
        ) {
          prices["smartepost"] = baseCharge;
          prices["smartepostTotal"] = +totalCharge;
          prices["smartepost_fuel"] = +fuelCharge;
          prices["smartepost_taxes"] = tax;
          prices["smartepost_transitDays"] = transitDays;
        }
      });
      // console.log("Prices", prices);
      return prices;
    })
    .catch((error) => console.log("error", error));
}

// export default { getreceiverlocation, updateFreightClass };
