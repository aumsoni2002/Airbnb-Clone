import Flag from "react-world-flags";
import { findCountryByCode } from "@/utils/countries";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode);
  const countryName =
    validCountry!.name.length > 20
      ? `${validCountry!.name.substring(0, 20)}...`
      : validCountry!.name;

  return (
    <span className="flex items-center gap-2 text-sm">
      <Flag code={countryCode} style={{ width: 20, height: 20 }} />
      {countryName}
    </span>
  );
}

export default CountryFlagAndName;
