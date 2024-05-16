import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";
import { useEffect, useState } from "react";
import style from "./Country.module.css";

export default function Country() {
  const params = useParams();
  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <img
        src={country.flagImg}
        alt={`${country.commonName}의 국기 이미지입니다.`}
      />
      <div className={style.body}>
        <div>
          <strong>코드: &nbsp;{country.code}</strong>
        </div>
        <div>
          <strong>코드: &nbsp;{country.capital.join(", ")}</strong>
        </div>
        <div>
          <strong>지역: &nbsp;{country.region}</strong>
        </div>
        <div>
          <strong>
            지도: &nbsp;
            <a href={country.googleMapURL} target="_blank">
              {country.googleMapURL}
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
}
