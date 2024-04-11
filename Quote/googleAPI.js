var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const place_id =
  "Eh42MXN0IFN0cmVldCwgV29vZHNpZGUsIE5ZLCBVU0EiLiosChQKEgnfgW70K1zCiRG7EO2Y_Hz63xIUChIJ7-MV-hpfwokRFO3DgM-5Uyw&";

fetch(
  `https://maps.googleapis.com/maps/api/place/details/json?fields=address_components,formatted_address&place_id=${place_id}key=AIzaSyDkCNPtgjc6wLp8Zk4KCHIb6lsfg_Z-Whs`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log("error", error));
