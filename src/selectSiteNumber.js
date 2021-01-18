import React from "react";
import costSheet from "./PGC Landamrk Cost Sheet.json";

function SiteList(props) {

  const [items] = React.useState(costSheet);
  const handleOnSiteChanges = (e) => {
    props.sendToParent(JSON.parse(e.target.value));
  }
  
  // React.useEffect(() => {
  //   if (props.onChange) {
  //     props.onChange(formData)
  //   }
  // }, [formData.username, formData.password])

  return (
    <select onChange={handleOnSiteChanges}>
      {items.map(item => (
        <option
          key={item.siteNo}
          value={JSON.stringify(item)}
        >
          {item.siteNo}
        </option>
      ))}
    </select>
  );
}

export default SiteList;