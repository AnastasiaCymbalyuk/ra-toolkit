import React from "react";
import { useDispatch } from "react-redux";
import { inputImage, showList } from "../../store/img";
import Button from "@material-ui/core/Button";

export default function FileUpload(data) {
    const dispatch = useDispatch();
    const { type } = data;
    
    const handleUpload = (event) => {
        event.preventDefault();
        if (!event.target.files[0]) {
            return;
        }
        dispatch(inputImage(URL.createObjectURL(event.target.files[0])));
        dispatch(showList(URL.createObjectURL(event.target.files[0])));
    };

    return (
        <React.Fragment>
            <div className={type + "_form_box"}>
                <span className="images_form_title">Click to button</span>
                <input type="file" accept="image/*" style={{ display: "none" }} id="contained_button_file" onChange={handleUpload} />
                <label htmlFor="contained_button_file">
                    <Button variant="contained" color="primary" component="span">Upload</Button>
                </label>
            </div>
        </React.Fragment>
    );
};