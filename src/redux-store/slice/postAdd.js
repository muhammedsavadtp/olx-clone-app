import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase/dbconfig";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../firebase/dbconfig";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from "uuid";
import { useState } from "react";

//upload image&data
const uploadData = createAsyncThunk(
  "products/upload",
  async ({
    uid,
    brand,
    modelVehicle,
    edition,
    drivenInkm,
    addedTitle,
    itemDescription,
    itemPrice,
    sellerState,
    sellerName,
    fuelType,
    transmission,
    numberOfOwners,
    imgUrl1,
    imgUrl2,
    imgUrl3,
    imgUrl4,
    imgUrl5,
    imgUrl6,
    imgUrl7,
    imgUrl8,
    imgUrl9,
    imgUrl10,
    imgUrl11,
    imgUrl12,
    imgUrl13,
    imgUrl14,
    imgUrl15,
    imgUrl16,
    imgUrl17,
    imgUrl18,
    imgUrl19,
    imgUrl20,
  }) => {
    const imageRefs = [];
    const imageUrls = [];

    // create an array of images
    const images = [
      imgUrl1,
      imgUrl2,
      imgUrl3,
      imgUrl4,
      imgUrl5,
      imgUrl6,
      imgUrl7,
      imgUrl8,
      imgUrl9,
      imgUrl10,
      imgUrl11,
      imgUrl12,
      imgUrl13,
      imgUrl14,
      imgUrl15,
      imgUrl16,
      imgUrl17,
      imgUrl18,
      imgUrl19,
      imgUrl20,
    ];

    // loop through the images and upload each one to the storage
    for (const image of images) {
      if (image) {
        const storageRef = ref(storage, `images/${image.name + v4()}`);
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        imageRefs.push(storageRef);
        imageUrls.push(url);
      }
    }

    const today = new Date();
    const cyear = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const dateString = `${day}-${month}-${cyear}`;
    const monthString = today
      .toLocaleString("default", { month: "long" })
      .substr(0, 3);

    const docRef = await addDoc(collection(db, "products"), {
      id: v4(),
      user: uid,
      brand: brand,
      modelVehicle,
      edition,
      drivenInkm,
      addedTitle,
      itemDescription,
      itemPrice,
      sellerState,
      sellerName,
      // use the array of image URLs to set the `imgUrl` field in the document
      imgUrl: imageUrls,
      fuelType,
      transmission,
      numberOfOwners,
      postDate: dateString,
      postMonth: monthString,
      postDay: day,
      postYear: cyear,
    });

    // // cleanup the uploaded images from the storage
    // for (const ref of imageRefs) {
    //   await deleteObject(ref);
    // }

    return docRef;
  }
);


// -----------------------------------------------------------------------------------------------------------------

const postAdd = createSlice({
  name: "postAdd",
  initialState: {
    brand: "",
    modelVehicle: "",
    edition: "",
    drivenInkm: "",
    addedTitle: "",
    itemDescription: "",
    itemPrice: "",
    sellerState: "",
    sellerName: "",
    uploadItemImages: null,
    // imageURL: null,
    fuelType: "",
    transmission: "",
    numberOfOwners: "",
    userUploadImageURL: "",

    loading: false,
    status: "idle",
    error: null,
    id: null,

    imgUrl1: null,
    imgUrl2: null,
    imgUrl3: null,
    imgUrl4: null,
    imgUrl5: null,
    imgUrl6: null,
    imgUrl7: null,
    imgUrl8: null,
    imgUrl9: null,
    imgUrl10: null,
    imgUrl11: null,
    imgUrl12: null,
    imgUrl13: null,
    imgUrl14: null,
    imgUrl15: null,
    imgUrl16: null,
    imgUrl17: null,
    imgUrl18: null,
    imgUrl19: null,
    imgUrl20: null,
  },
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setModelVehicle: (state, action) => {
      state.modelVehicle = action.payload;
    },
    setEdition: (state, action) => {
      state.edition = action.payload;
    },
    setDrivenInkm: (state, action) => {
      state.drivenInkm = action.payload;
    },
    setItemTitle: (state, action) => {
      state.addedTitle = action.payload;
    },
    setItemDescription: (state, action) => {
      state.itemDescription = action.payload;
    },
    setItemPrice: (state, action) => {
      state.itemPrice = action.payload;
    },
    setUserState: (state, action) => {
      state.sellerState = action.payload;
    },
    setUserName: (state, action) => {
      state.sellerName = action.payload;
    },

    setUploadImages: (state, action) => {
      state.uploadItemImages = action.payload;
    },

    setFuelType: (state, action) => {
      state.fuelType = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    setNumberOfOwners: (state, action) => {
      state.numberOfOwners = action.payload;
    },

    setImageUrl: (state, action) => {
      const index = action.payload.index;
      const file = action.payload.file;

      return {
        ...state,
        [`imgUrl${index+1}`]: file,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadData.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(uploadData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.id = action.payload;
        state.loading = false;
      })
      .addCase(uploadData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {
  setBrand,
  setModelVehicle,
  setEdition,
  setDrivenInkm,
  setItemTitle,
  setItemDescription,
  setUserName,
  setItemPrice,
  setUserState,
  setUploadImages,
  setImageUrl,
  setFuelType,
  setTransmission,
  setNumberOfOwners,
} = postAdd.actions;

export { uploadData };

export default postAdd.reducer;

// --------------------------------------------------------------------------------------------------------------------
