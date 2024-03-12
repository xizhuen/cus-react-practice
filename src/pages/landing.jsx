import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { saveSearch } from "../store/actions/saveSearch";
import SearchHistory from "../components/SearchHistory";

const LandingPage = () => {
  const dispatch = useDispatch();
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "my" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  useEffect(() => {
    if (window && window.google) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options
      );
      autoCompleteRef.current.addListener("place_changed", async function () {
        const place = await autoCompleteRef.current.getPlace();
        // console.log({ place });
        dispatch(saveSearch(place.name));
      });
    }
  }, []);

  return (
    <>
      <div class="form-floating w-50">
        <input
          class="form-control"
          id="placesDataList"
          placeholder="Type here..."
          ref={inputRef}
        />
        <label for="placesDataList">Find Places (Type Here)</label>
      </div>
      <SearchHistory />
    </>
  );
};

export default LandingPage;
