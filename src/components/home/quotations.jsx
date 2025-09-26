// src/components/Quotation.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuotationData } from "../../store/quotationSlice";
import { MdOutlineEdit } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { CiSquarePlus } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import { useRef } from "react";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill,PiNumberCircleThreeFill } from "react-icons/pi";

export default function Quotation({ readOnly = false }) {
  const [showHeading, setShowHeading] = useState(true);
  const reduxData = useSelector((state) => state.quotation);
  // States
  const [heading, setHeading] = useState(reduxData.heading || "Quotation");
  const [quotationNo, setQuotationNo] = useState(reduxData.quotationNo || "");
  const [quotationDate, setQuotationDate] = useState(
    reduxData.quotationDate || ""
  );
  const [extraFields, setExtraFields] = useState(reduxData.extraFields || []);
  const [from, setFrom] = useState(reduxData.from || []);
  const [to, setTo] = useState(reduxData.to || []);
  const [items, setItems] = useState(reduxData.items || []);
  const [terms, setTerms] = useState(reduxData.terms || []);
  const [additionalInfo, setAdditionalInfo] = useState(
    reduxData.additionalInfo || []
  );
  const [notes, setNotes] = useState(reduxData.notes || []);
  const [attachments, setAttachments] = useState(reduxData.attachments || []);
  const [discount, setDiscount] = useState(reduxData.discount || 0);
  const [stamp, setStamp] = useState(reduxData.stamp || null);
  const [logo, setLogo] = useState(reduxData.logo || null);

  const [logoURL, setLogoURL] = useState(
    logo instanceof File ? URL.createObjectURL(logo) : logo || null
  );

  const [stampURL, setStampURL] = useState(
    stamp instanceof File ? URL.createObjectURL(stamp) : stamp || null
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoInputRef = useRef(null);
  const stampInputRef = useRef(null);

  const addExtraField = () => {
    setExtraFields([...extraFields, { label: "", value: "" }]);
  };

  const handlePartyChange = (party, setParty, index, field, value) => {
    const updated = party.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    setParty(updated);
  };

  const handleAddPartyField = (party, setParty) => {
    setParty([...party, { label: "", value: "", isDefault: false }]);
  };

  const handleItemChange = (index, field, value) => {
    const updated = items.map((item, i) =>
      i === index
        ? {
            ...item,
            [field]: value,
            amount:
              field === "qty" || field === "rate"
                ? (field === "qty" ? value : item.qty) *
                  (field === "rate" ? value : item.rate)
                : item.qty * item.rate,
            total:
              (field === "qty" ? value : item.qty) *
                (field === "rate" ? value : item.rate) *
                (1 + (field === "gst" ? value : item.gst) / 100) || 0,
          }
        : item
    );

    setItems(updated);
  };

  const addItem = () => {
    setItems([
      ...items,
      { description: "", qty: 1, rate: 0, gst: 0, amount: 0, total: 0 },
    ]);
  };

  const duplicateLastItem = () => {
    if (items.length > 0) {
      setItems([...items, { ...items[items.length - 1] }]);
    }
  };

  const handleAddListItem = (list, setList) => {
    setList([...list, ""]);
  };

  const handleListChange = (list, setList, index, value) => {
    const updated = [...list];
    updated[index] = value;
    setList(updated);
  };

  const handleGenerate = () => {
    dispatch(
      setQuotationData({
        heading,
        quotationNo,
        quotationDate,
        extraFields,
        from,
        to,
        items,
        terms,
        additionalInfo,
        notes,
        attachments,
        discount,
        stamp: stampURL,
        logo: logoURL,
      })
    );
    navigate("/quotation-customization");
  };

  const subtotal = items.reduce((sum, i) => sum + i.total, 0);
  const total = subtotal - discount;
 
  React.useEffect(() => {
    return () => {
      if (logo instanceof File && logoURL) URL.revokeObjectURL(logoURL);
      if (stamp instanceof File && stampURL) URL.revokeObjectURL(stampURL);
    };
  }, [logoURL, stampURL]);

  return (
    <main
      onClick={() => setShowHeading(true)}
      className="container mx-auto lg:px-30 px-4 py-10"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Create <span className="text-[#27247B]">Quotations</span> in a Moment
        </h1>
        <div className="mt-4 flex flex-wrap justify-center gap-10  sm:text-base font-medium text-black">
          <button className="flex gap-2 items-center">
            <PiNumberCircleOneFill size={22} />
            <span className="text-2xl">Add your details</span>
          </button>
          <button className="flex gap-2 items-center">
            <PiNumberCircleTwoFill size={22} />
            <span className="text-2xl">Customize</span>
          </button>
          <button className="flex gap-2 items-center">
            <PiNumberCircleThreeFill size={22} />
            <span className="text-2xl">Share</span>
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-2xl rounded-xl lg:px-20 px-5 py-15  border border-gray-200 space-y-6">
       
        {/* Quotation Header + Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Heading & Details */}
          <div className="w-full lg:w-2/3">
            {/* Editable Heading */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center"
            >
              {showHeading ? (
                <h2
                  className="text-3xl font-bold text-[#27247B] flex items-center flex-row"
                  onClick={() => setShowHeading(false)}
                >
                  {heading}
                  <MdOutlineEdit
                    onClick={() => setShowHeading(false)}
                    className="text-2xl text-blue-800 cursor-pointer ml-2"
                  />
                </h2>
              ) : (
                <input
                  type="text"
                  value={heading}
                  disabled={readOnly}
                  onChange={(e) => setHeading(e.target.value)}
                  onBlur={() => setShowHeading(true)}
                  autoFocus
                  className="text-3xl w-full font-bold focus:outline-none text-[#27247B]"
                />
              )}
              
            </div>

            {/* Quotation No + Date */}
            <div className="mt-4 space-y-2">
              <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                <label className="text-sm font-medium">Quotation No:</label>
                <input
                  type="text"
                  value={quotationNo}
                  disabled={readOnly}
                  onChange={(e) => setQuotationNo(e.target.value)}
                  className={`border ${
                    quotationNo ? "border-transparent" : "border-gray-200"
                  } bg-transparent rounded w-full sm:w-40 outline-none px-2 py-1`}
                  placeholder="Enter number"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                <label className="text-sm font-medium">Quotation Date:</label>
                <input
                  type="date"
                  value={quotationDate}
                  disabled={readOnly}
                  onChange={(e) => setQuotationDate(e.target.value)}
                  className={`border ${
                    quotationDate ? "border-transparent" : "border-gray-200"
                  } bg-transparent rounded px-2 py-1 outline-none`}
                />
              </div>

              {/* Dynamic Extra Fields */}
              {extraFields.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-2 items-center"
                >
                  <input
                    placeholder="Field"
                    value={f.label}
                    disabled={readOnly}
                    onChange={(e) => {
                      const updated = [...extraFields];
                      updated[i].label = e.target.value;
                      setExtraFields(updated);
                    }}
                    className={`px-2 py-1 font-semibold outline-none rounded  bg-transparent w-full sm:w-1/3 ${
                      f.label
                        ? "border border-transparent"
                        : "border border-gray-200"
                    }`}
                  />
                  <div className="flex flex-row  items-center w-full sm:w-2/3 gap-2">
                    <input
                      placeholder="Value"
                      disabled={readOnly}
                      value={f.value}
                      onChange={(e) => {
                        const updated = [...extraFields];
                        updated[i].value = e.target.value;
                        setExtraFields(updated);
                      }}
                      className={`px-2 py-1 outline-none text-gray-700 rounded bg-transparent w-full sm:w-1/3 ${
                        f.value
                          ? "border border-transparent"
                          : "border border-gray-200"
                      }`}
                    />
                    {!readOnly && (
                      <button
                        onClick={() => {
                          const updated = [...extraFields];
                          updated.splice(i, 1);
                          setExtraFields(updated);
                        }}
                        className="flex texts-center text-red-500 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Add Field Button */}
              {!readOnly && (
                <button
                  onClick={addExtraField}
                  className="text-black text-sm mt-2 flex gap-2 items-center"
                >
                  <CiSquarePlus size={24} className="text-[#27247B]" />{" "}
                  Add/Remove New Field
                </button>
              )}
            </div>
          </div>

          {/* Logo Upload */}
          <div
            className="w-full sm:w-64 h-40 cursor-pointer flex flex-col gap-2 items-center justify-center rounded-2xl text-black bg-gray-100  overflow-hidden"
            onClick={() => logoInputRef.current.click()}
          >
            {!logoURL ? (
              <>
                <GrGallery className="text-black" size={24} />
                <span className="text-sm text-black border border-dashed ">
                  Add Your Business Logo
                </span>
              </>
            ) : (
              <img
                src={logoURL}
                alt="Logo"
                className="h-full w-full object-contain bg-white"
              />
            )}
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              ref={logoInputRef}
              disabled={readOnly}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setLogo(file);
                  const url = URL.createObjectURL(file);
                  setLogoURL(url);
                }
              }}
            />
          </div>
        </div>

        {/* Parties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Quotation By", state: from, set: setFrom },
            { title: "Quotation To", state: to, set: setTo },
          ].map((party, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-2xl p-4 shadow-md space-y-2"
            >
              <h2 className="font-semibold">{party.title}</h2>

              {party.state.map((field, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-2 items-start sm:items-center"
                >
                  <input
                    placeholder="Field"
                    value={field.label}
                    disabled={readOnly}
                    onChange={(e) =>
                      handlePartyChange(
                        party.state,
                        party.set,
                        i,
                        "label",
                        e.target.value
                      )
                    }
                    className={`px-2 py-1 font-semibold outline-none rounded bg-transparent w-full sm:w-1/3 ${
                      field.label
                        ? "border border-transparent"
                        : "border border-gray-200"
                    }`}
                  />
                  <input
                    placeholder="Value"
                    value={field.value}
                    disabled={readOnly}
                    onChange={(e) =>
                      handlePartyChange(
                        party.state,
                        party.set,
                        i,
                        "value",
                        e.target.value
                      )
                    }
                    className={`px-2 py-1 outline-none  rounded bg-transparent w-full ${
                      field.value
                        ? "border border-transparent"
                        : "border border-gray-200"
                    }`}
                  />

                  {/* Show Remove only if field is NOT default */}
                  {!field.isDefault && (
                    <button
                      onClick={() => {
                        const updated = [...party.state];
                        updated.splice(i, 1);
                        party.set(updated);
                      }}
                      className="text-red-600 text-sm font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              {!readOnly && (
                <button
                  onClick={() => handleAddPartyField(party.state, party.set)}
                  className="text-black text-sm mt-2 flex gap-2 items-center"
                >
                  <CiSquarePlus size={24} className="text-[#27247B]" />{" "}
                  Add/Remove New Field
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Items Table */}
        <div className="w-full overflow-x-auto border rounded-2xl">
          <table className="min-w-[600px] w-full border-collapse shadow-md rounded-xl ">
            <thead className="bg-blue-900 text-white  ">
              <tr>
                <th className="p-3 sm:p-4 rounded-tl-xl text-xs sm:text-sm text-center">
                  Description
                </th>
                <th className="p-3 sm:p-4 text-xs sm:text-sm text-center">
                  Qty
                </th>
                <th className="p-3 sm:p-4 text-xs sm:text-sm text-center">
                  Rate
                </th>
                <th className="p-3 sm:p-4 text-xs sm:text-sm text-center">
                  GST%
                </th>
                <th className="p-3 sm:p-4 text-xs sm:text-sm text-center">
                  Amount
                </th>
                <th className="p-3 sm:p-4 rounded-tr-xl text-xs sm:text-sm text-center">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              {items.map((it, i) => (
                <tr
                  key={i}
                  className={`text-center ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <td>
                    <input
                      className="w-full px-2 py-1 text-xs sm:text-sm text-center outline-none bg-transparent"
                      value={it.description}
                      disabled={readOnly}
                      placeholder="Item description"
                      onChange={(e) =>
                        handleItemChange(i, "description", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      disabled={readOnly}
                      className="w-full px-2 py-1 text-xs sm:text-sm text-center outline-none bg-transparent"
                      value={it.qty}
                      onChange={(e) =>
                        handleItemChange(i, "qty", Number(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="w-full px-2 py-1 text-xs sm:text-sm text-center outline-none bg-transparent"
                      value={it.rate}
                      disabled={readOnly}
                      onChange={(e) =>
                        handleItemChange(i, "rate", Number(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      disabled={readOnly}
                      className="w-full px-2 py-1 text-xs sm:text-sm text-center outline-none bg-transparent"
                      value={it.gst}
                      onChange={(e) =>
                        handleItemChange(i, "gst", Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="text-xs sm:text-sm text-center">
                    {it.amount.toFixed(2)}
                  </td>
                  <td className="text-xs sm:text-sm text-center">
                    {it.total.toFixed(2)}
                  </td>
                </tr>
              ))}

              {/* Action Buttons Row Inside Table */}
              <tr className="bg-white">
                <td colSpan={6} className="text-left px-4 py-4">
                  <div className="flex flex-row  gap-3 sm:gap-4">
                    {!readOnly && (
                      <button
                        onClick={addItem}
                        className="text-black text-xs sm:text-sm flex gap-2 items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
                      >
                        <CiSquarePlus size={18} className="text-[#27247B]" />
                        Add New Line
                      </button>
                    )}
                    {!readOnly && (
                      <button
                        onClick={duplicateLastItem}
                        className="text-black text-xs sm:text-sm flex gap-2 items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
                      >
                        <CiSquarePlus size={18} className="text-[#27247B]" />
                        Duplicate Previous Line
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Terms & Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Terms & Conditions */}
          <div>
            <span className="text-2xl text-black">Terms & Conditions</span>
            {terms.map((t, i) => (
              <div key={i} className="relative my-1 flex items-center ">
                {t && <BsDot className="text-black text-3xl mr-1" />}
                <input
                  disabled={readOnly}
                  value={t}
                  onChange={(e) =>
                    handleListChange(terms, setTerms, i, e.target.value)
                  }
                  className={`w-full pl-${
                    t ? "6" : "2"
                  } pr-2 py-1 outline-none transition-all ${
                    t ? "border-none bg-transparent" : "border border-gray-200"
                  }`}
                />
              </div>
            ))}
            {!readOnly && (
              <button
                onClick={() => handleAddListItem(terms, setTerms)}
                className="text-black text-sm mt-2 flex gap-2 items-center"
              >
                <CiSquarePlus size={20} className="text-[#27247B]" /> Add T&C
              </button>
            )}
          </div>

          {/* Additional Info */}
          <div>
            <span className="text-2xl text-black">Additional Info</span>
            {additionalInfo.map((a, i) => (
              <div key={i} className="relative my-1 flex items-center ">
                {a && <BsDot className="text-black text-3xl mr-1" />}
                <input
                  value={a}
                  disabled={readOnly}
                  onChange={(e) =>
                    handleListChange(
                      additionalInfo,
                      setAdditionalInfo,
                      i,
                      e.target.value
                    )
                  }
                  className={`w-full pl-${
                    a ? "6" : "2"
                  } pr-2 py-1 outline-none transition-all ${
                    a ? "border-none bg-transparent" : "border border-gray-200"
                  }`}
                />
              </div>
            ))}
            {!readOnly && (
              <button
                onClick={() =>
                  handleAddListItem(additionalInfo, setAdditionalInfo)
                }
                className="text-black text-sm mt-2 flex gap-2 items-center"
              >
                <CiSquarePlus size={20} className="text-[#27247B]" /> Add Info
              </button>
            )}
          </div>
        </div>

        {/* Notes & Attachments Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Notes */}
          <div>
            <span className="text-2xl text-black">Notes</span>
            {notes.map((n, i) => (
              <div key={i} className="relative my-1 flex items-center ">
                {n && <BsDot className="text-black text-3xl mr-1" />}
                <input
                  value={n}
                  disabled={readOnly}
                  onChange={(e) =>
                    handleListChange(notes, setNotes, i, e.target.value)
                  }
                  className={`w-full pl-${
                    n ? "6" : "2"
                  } pr-2 py-1 outline-none transition-all ${
                    n ? "border-none bg-transparent" : "border border-gray-200"
                  }`}
                />
              </div>
            ))}
            {!readOnly && (
              <button
                onClick={() => handleAddListItem(notes, setNotes)}
                className="text-black text-sm mt-2 flex gap-2 items-center"
              >
                <CiSquarePlus size={20} className="text-[#27247B]" /> Add Note
              </button>
            )}
          </div>

          {/* Attachments */}
          <div>
            <span className="text-2xl text-black">Attachments</span>
            {attachments.map((a, i) => (
              <div key={i} className="relative my-1 flex items-center ">
                {a && <BsDot className="text-black text-3xl mr-1" />}
                <input
                  value={a}
                  disabled={readOnly}
                  onChange={(e) =>
                    handleListChange(
                      attachments,
                      setAttachments,
                      i,
                      e.target.value
                    )
                  }
                  className={`w-full pl-${
                    a ? "6" : "2"
                  } pr-2 py-1 outline-none transition-all ${
                    a ? "border-none bg-transparent" : "border border-gray-200"
                  }`}
                />
              </div>
            ))}
            {!readOnly && (
              <button
                onClick={() => handleAddListItem(attachments, setAttachments)}
                className="text-black text-sm mt-2 flex gap-2 items-center"
              >
                <CiSquarePlus size={20} className="text-[#27247B]" /> Add
                Attachment
              </button>
            )}
          </div>
        </div>

        {/* Totals */}
        <div className="w-auto lg:w-1/3 ml-auto  flex flex-col space-y-2 text-sm  pt-10">
          {/* Subtotal */}
          <div className="flex justify-between border-b py-1">
            <span>Sub Total:</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>

          {/* Discount */}
          <div className="flex justify-between  border-b py-1 items-center">
            <span>Discount (%):</span>
            <input
              type="number"
              disabled={readOnly}
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="text-right"
            />
          </div>

          {/* Total */}
          <div className="flex justify-between font-semibold border-b py-1">
            <span>Total:</span>
            <span>Rs. {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Stamp/Signature */}
        <div className="flex justify-end">
          <div
            className="w-40 h-24 bg-gray-100 flex items-center justify-center rounded-xl text-gray-400 cursor-pointer"
            onClick={() => stampInputRef.current.click()}
          >
            {stampURL ? (
              <img
                src={stampURL}
                alt="Stamp"
                className="h-full object-contain bg-white"
              />
            ) : (
              <span className="text-sm text-black border border-dashed">
                Stamp/Signature
              </span>
            )}
            <input
              type="file"
              disabled={readOnly}
              accept="image/png, image/jpeg, image/jpg"
              ref={stampInputRef}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setStamp(file);
                  const url = URL.createObjectURL(file);
                  setStampURL(url);
                }
              }}
            />
          </div>
        </div>

        {/* Customize Button */}
        <div className="text-center">
          {!readOnly && (
            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow"
            >
              Customize
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
