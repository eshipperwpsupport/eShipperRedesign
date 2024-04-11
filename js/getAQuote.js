function pagination({
  package_quantity,
  package_type,
  packages,
  SenderCountry,
  SenderCity,
  SenderProvince,
  SenderPostalCode,
  ReceiverCountry,
  ReceiverCity,
  ReceiverProvince,
  ReceiverPostalCode,
}) {
  var myHeaders = new Headers();
  myHeaders.append("X-API-KEY", "webquotes2017");
  myHeaders.append("X-API-SECRET", "webquotes2017");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "AWSALB=c7imxpAFqF/gW7NBNEz0K3DnlMCz1ySltqZT2/W92qsKTktyY90ylrWywL6U07p4fzVYBBI1LwT8pJ8FMCEtbesGLsvrH5/ihv6oj2GoLAnCRWrjYuyw+JkrjgyF; AWSALBCORS=c7imxpAFqF/gW7NBNEz0K3DnlMCz1ySltqZT2/W92qsKTktyY90ylrWywL6U07p4fzVYBBI1LwT8pJ8FMCEtbesGLsvrH5/ihv6oj2GoLAnCRWrjYuyw+JkrjgyF"
  );

  // Get today's date
  let today = new Date();

  // Add one day to get tomorrow's date
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Format tomorrow's date in the desired format
  let formattedTomorrow = tomorrow.toISOString().slice(0, 16).replace("T", " ");
  console.log(formattedTomorrow);

  var raw = JSON.stringify({
    from: {
      company: "web quote 2015",
      attention: "John Doe",
      address1: "9, Van Der Graaf Court",
      city: SenderCity,
      province: SenderProvince,
      country: SenderCountry,
      zip: SenderPostalCode,
      email: "eshippertest1@rmgx.in",
      phone: "9810832351",
    },
    to: {
      address1: "3185 Grandview Hwy",
      city: ReceiverCity,
      province: ReceiverProvince,
      zip: ReceiverPostalCode,
      country: ReceiverCountry,
    },
    scheduledShipDate: formattedTomorrow,
    packagingUnit: "IMPERIAL",
    packages: {
      type: package_type,
      package_quantity,
      packages,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://ww2.eshipper.com/api/v2/quest-quote", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
