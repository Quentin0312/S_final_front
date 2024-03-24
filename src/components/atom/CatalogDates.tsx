import { JSXElement } from "solid-js";
import "./CatalogDates.css";

export function CatalogDates(props: {
  startDate: string;
  endDate: string;
}): JSXElement {
  return (
    // <>
    //   <div class="catalog-dates">Du {props.startDate}</div>
    //   <div class="catalog-dates">au {props.endDate}</div>
    // </>
    <>
      <div class="catalog-dates">
        Du {props.startDate} au {props.endDate}
      </div>
    </>
  );
}
