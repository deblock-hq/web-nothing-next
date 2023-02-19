import axios from "axios";
import React, { useEffect, useState } from "react";

const TermsPolicies = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://waitlist-staging.deblock.com/v1/legals/list", {
        headers: {
          "Accept-Language": "fr",
          Authorization:
            "Bearer 64726720888b45b06e7f8f22ac2cbb4ece5cefe6016cf31986b80ad47fece262de9bb18db4225f728816d611eb28487fddf9",
          "Content-Type": "application/json",
        },
        params: {
          filter: {
            locale: "en",
            country: "GB",
            type: "terms",
            page_size: 10,
          },
        },
      })
      .then(async (res) => {
        console.log("t&p res", res);
        setData(res.data.result.results);
      })
      .catch((err) => {
        console.log("t&p err", err);
      });
  }, []);

  console.log(data);

  return <div>TermsPolicies</div>;
};

export default TermsPolicies;
