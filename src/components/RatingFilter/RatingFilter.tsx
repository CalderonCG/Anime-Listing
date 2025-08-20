import "./RatingFilter.scss";

//Types------------------------------------------------------
type HandleFilterProps =
  | { key: "year" | "rating"; value: number }
  | { key: "genres"; value: string };
type RatingProps = {
  value: number;
  handleFilter: ({ key, value }: HandleFilterProps) => void;
};



//Component-------------------------------------------
function RatingFilter({ value, handleFilter }: RatingProps) {
  return (
    <div className="rating_filter">
      <p>Minimum rating: </p>
      <input
        type="number"
        step="0.1"
        min="0"
        value={value}
        max="10"
        onChange={(e) =>
          handleFilter({ key: "rating", value: Number(e.target.value) })
        }
        className="rating_filter_input"
      />
    </div>
  );
}

export default RatingFilter;
