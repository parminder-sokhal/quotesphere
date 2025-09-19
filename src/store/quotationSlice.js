import { createSlice } from "@reduxjs/toolkit";

const quotationSlice = createSlice({
  name: "quotation",
  initialState: {
    heading: "Quotation",
    quotationNo: "",
    quotationDate: "",
    extraFields: [],

    from: [
      { label: "Name", value: "" },
      { label: "Phone", value: "" },
      { label: "Email", value: "" },
      { label: "Address", value: "" },
      { label: "PAN", value: "" },
    ],
    to: [
      { label: "Name", value: "" },
      { label: "Phone", value: "" },
      { label: "Email", value: "" },
      { label: "Address", value: "" },
      { label: "PAN", value: "" },
    ],

    items: [
      { description: "", qty: 1, rate: 0, gst: 0, amount: 0, total: 0 },
    ],

    terms: [],
    additionalInfo: [],
    notes: [],
    attachments: [],

    discount: 0,
    stamp: null,
  },
  reducers: {
    setQuotationData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setQuotationData } = quotationSlice.actions;
export default quotationSlice.reducer;
