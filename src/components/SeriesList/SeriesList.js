import React from "react";
import "./SeriesList.css";

const SeriesListItem = ({ series }) => {
    return <li>{series.show.name}</li>;
};

const SeriesList = props => {
    return (
        <ul className="series-list">
            {props.list.map(series => (
                <SeriesListItem series={series} key={series.show.id} />
            ))}
        </ul>
    );
};

export default SeriesList;