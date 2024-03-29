import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
// import {
//   createColor,
//   getAColor,
//   resetState,
//   updateAColor,
// } from "../features/color/colorSlice";
let schema = yup.object().shape({
  title: yup.string().required("Color is Required"),
});
const Addcolor = () => {

  
  //   useEffect(() => {
  //     if (getColorId !== undefined) {
  //       dispatch(getAColor(getColorId));
  //     } else {
  //       dispatch(resetState());
  //     }
  //   }, [getColorId]);
  //   useEffect(() => {
  //     if (isSuccess && createdColor) {
  //       toast.success("Color Added Successfullly!");
  //     }
  //     if (isSuccess && updatedColor) {
  //       toast.success("Color Updated Successfullly!");
  //       navigate("/admin/list-color");
  //     }
  //     if (isError) {
  //       toast.error("Something Went Wrong!");
  //     }
  //   }, [isSuccess, isError, isLoading, createdColor]);
  
  return (
    <div>
      <h3 className="mb-4 title">Color</h3>
      <div>
        <form action="" >
          <CustomInput
            type="color"
            label="Enter Product Color"
            // onChng={formik.handleChange("title")}
            // onBlr={formik.handleBlur("title")}
            // val={formik.values.title}
            id="color"
          />
          <div className="error">
            {/* {formik.touched.title && formik.errors.title} */}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {/* {getColorId !== undefined ? "Edit" : "Add"} Color */}
            Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
