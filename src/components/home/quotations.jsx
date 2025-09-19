// src/components/Quotation.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuotationData } from "../../store/quotationSlice";
import { MdOutlineEdit } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { CiSquarePlus } from "react-icons/ci";

export default function Quotation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Main States
  const [heading, setHeading] = useState("Quotation");
  const [showHeading, setShowHeading] = useState(true);
  const [quotationNo, setQuotationNo] = useState("");
  const [quotationDate, setQuotationDate] = useState("");
  const [extraFields, setExtraFields] = useState([]);

  const [from, setFrom] = useState([
    { label: "Name", value: "" },
    { label: "Phone", value: "" },
    { label: "Email", value: "" },
    { label: "Address", value: "" },
    { label: "PAN", value: "" },
  ]);
  const [to, setTo] = useState([
    { label: "Name", value: "" },
    { label: "Phone", value: "" },
    { label: "Email", value: "" },
    { label: "Address", value: "" },
    { label: "PAN", value: "" },
  ]);

  const [items, setItems] = useState([
    { description: "", qty: 1, rate: 0, gst: 0, amount: 0, total: 0 },
  ]);

  const [terms, setTerms] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [notes, setNotes] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [stamp, setStamp] = useState(null);

  // Handlers
  const addExtraField = () => {
    setExtraFields([...extraFields, { label: "", value: "" }]);
  };

  const handlePartyChange = (party, setParty, index, field, value) => {
    const updated = [...party];
    updated[index][field] = value;
    setParty(updated);
  };

  const handleAddPartyField = (party, setParty) => {
    setParty([...party, { label: "", value: "" }]);
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    updated[index].amount = updated[index].qty * updated[index].rate;
    updated[index].total =
      updated[index].amount +
      (updated[index].amount * updated[index].gst) / 100;
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
        stamp,
      })
    );
    navigate("");
  };

  const subtotal = items.reduce((sum, i) => sum + i.total, 0);
  const total = subtotal - discount;
  const [logo, setLogo] = useState(null);
  const logoInputRef = React.useRef(null);
  const stampInputRef = React.useRef(null);

  const [logoURL, setLogoURL] = useState(null);
  const [stampURL, setStampURL] = useState(null);

  React.useEffect(() => {
    return () => {
      if (logoURL) URL.revokeObjectURL(logoURL);
      if (stampURL) URL.revokeObjectURL(stampURL);
    };
  }, [logoURL, stampURL]);

  return (
    <main
      onClick={() => setShowHeading(true)}
      className="container mx-auto lg:px-30 px-5  py-20"
    >
      {/* Quotation Container */}
      <div className="mb-8 text-center">
        <h1 className="text-6xl font-bold">
          Create <span className="text-[#27247B]">Quotations</span> in a Moment
        </h1>
        <p className="text-gray-600 mt-2">
          Fill in the details below to generate a professional quotation.
        </p>
      </div>
      <div className="bg-white shadow-2xl rounded-xl lg:px-30 px-5 py-15 border border-gray-200 space-y-6">
        {/* Heading */}
        <div className="flex justify-between items-start">
          <div>
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-start"
            >
              {showHeading ? (
                <h2 className="text-3xl font-bold  text-[#27247B]">
                  {heading}
                </h2>
              ) : (
                <input
                  type="text"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  onEnter={() => setShowHeading(true)}
                  style={{ color: "#27247B" }}
                  className="text-3xl w-40 font-bold focus:outline-none "
                />
              )}
              &nbsp;
              <MdOutlineEdit
                onClick={() => setShowHeading(false)}
                className="text-2xl text-blue-800 cursor-pointer"
              />
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex gap-2 justify-start items-center">
                <label className="block text-sm font-medium">
                  Quotation No:
                </label>
                <input
                  type="text"
                  value={quotationNo}
                  onChange={(e) => setQuotationNo(e.target.value)}
                  className="border border-gray-200 rounded w-40 justify-center outline-none"
                />
              </div>
              <div className="flex gap-2 justify-start items-center">
                <label className="block text-sm font-medium">
                  Quotation Date
                </label>
                <input
                  type="date"
                  value={quotationDate}
                  onChange={(e) => setQuotationDate(e.target.value)}
                  className="border border-gray-200 rounded px-3 py-2 outline-none"
                />
              </div>
              {extraFields.map((f, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    placeholder="Field"
                    value={f.label}
                    onChange={(e) => {
                      const copy = [...extraFields];
                      copy[i].label = e.target.value;
                      setExtraFields(copy);
                    }}
                    className="border border-gray-200 rounded px-2 py-1 outline-none"
                  />
                  <input
                    placeholder="Value"
                    value={f.value}
                    onChange={(e) => {
                      const copy = [...extraFields];
                      copy[i].value = e.target.value;
                      setExtraFields(copy);
                    }}
                    className="border border-gray-200 rounded px-2 py-1 outline-none"
                  />
                </div>
              ))}
              <button
                onClick={addExtraField}
                className="text-black text-sm mt-2 flex gap-2 justify-center items-center"
              >
                <CiSquarePlus size={24} className="text-[#27247B]" /> Add New
                Field
              </button>
            </div>
          </div>
          <div
            className="w-64 h-40 cursor-pointer flex flex-col gap-2 items-center justify-center rounded-2xl text-black bg-gray-100 border border-dashed border-gray-400 overflow-hidden"
            onClick={() => logoInputRef.current.click()}
          >
            {!logoURL ? (
              <>
                <GrGallery className="text-black" size={24} />
                <span className="text-sm text-gray-600">
                  Add Your Business Logo
                </span>
              </>
            ) : (
              <img
                src={logoURL}
                alt="Logo"
                className="h-full w-full object-contain"
              />
            )}

            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              ref={logoInputRef}
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
              className="border border-gray-100  rounded-2xl p-4 shadow-md space-y-2"
            >
              <h2 className="font-semibold">{party.title}</h2>
              {party.state.map((field, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    placeholder="Field"
                    value={field.label}
                    onChange={(e) =>
                      handlePartyChange(
                        party.state,
                        party.set,
                        i,
                        "label",
                        e.target.value
                      )
                    }
                    className=" px-2 py-1 w-1/3 outline-none "
                  />
                  <input
                    placeholder="Value"
                    value={field.value}
                    onChange={(e) =>
                      handlePartyChange(
                        party.state,
                        party.set,
                        i,
                        "value",
                        e.target.value
                      )
                    }
                    className="border border-gray-100 rounded px-2 py-1 flex-1 outline-none"
                  />
                </div>
              ))}
              <button
                onClick={() => handleAddPartyField(party.state, party.set)}
                className="text-black text-sm mt-2 flex gap-2 justify-center items-center"
              >
                <CiSquarePlus size={24} className="text-[#27247B]" /> Add New
                Field
              </button>
            </div>
          ))}
        </div>

        {/* Items Table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full border-collapse shadow-md rounded-xl">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3 sm:p-6 rounded-tl-xl text-xs sm:text-sm">
                  Description
                </th>
                <th className="p-3 sm:p-6 text-xs sm:text-sm">Qty</th>
                <th className="p-3 sm:p-6 text-xs sm:text-sm">Rate</th>
                <th className="p-3 sm:p-6 text-xs sm:text-sm">GST%</th>
                <th className="p-3 sm:p-6 text-xs sm:text-sm">Amount</th>
                <th className="p-3 sm:p-6 rounded-tr-xl text-xs sm:text-sm">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={i} className="text-center">
                  <td>
                    <input
                      className="w-full px-1 sm:px-2 py-1 text-xs sm:text-sm text-center outline-none"
                      value={it.description}
                      onChange={(e) =>
                        handleItemChange(i, "description", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="w-full px-1 sm:px-2 py-1 text-xs sm:text-sm text-center outline-none"
                      value={it.qty}
                      onChange={(e) =>
                        handleItemChange(i, "qty", Number(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="w-full px-1 sm:px-2 py-1 text-xs sm:text-sm text-center outline-none"
                      value={it.rate}
                      onChange={(e) =>
                        handleItemChange(i, "rate", Number(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="w-full px-1 sm:px-2 py-1 text-xs sm:text-sm text-center outline-none"
                      value={it.gst}
                      onChange={(e) =>
                        handleItemChange(i, "gst", Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="text-center text-xs sm:text-sm">
                    {it.amount.toFixed(2)}
                  </td>
                  <td className="text-center text-xs sm:text-sm">
                    {it.total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-6 py-4 w-full">
            <button
              onClick={addItem}
              className="text-black w-full text-sm flex gap-2 justify-center items-center border border-gray-300 rounded-md py-2"
            >
              <CiSquarePlus size={18} className="text-[#27247B]" /> Add New
              Field
            </button>
            <button
              onClick={duplicateLastItem}
              className="text-black w-full text-sm flex gap-2 justify-center items-center border border-gray-300 rounded-md py-2"
            >
              <CiSquarePlus size={24} className="text-[#27247B]" /> Duplicate
              Previous Line
            </button>
          </div>
        </div>

        {/* Terms, Info, Notes, Attachments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Terms & Conditions</h3>
            {terms.map((t, i) => (
              <input
                key={i}
                value={t}
                onChange={(e) =>
                  handleListChange(terms, setTerms, i, e.target.value)
                }
                className="border border-gray-100 w-full px-2 py-1 my-1 outline-none"
              />
            ))}
            <button
              onClick={() => handleAddListItem(terms, setTerms)}
              className="text-black text-sm mt-2 flex gap-2 justify-center items-center"
            >
              <CiSquarePlus size={24} className="text-[#27247B]" /> Add T&C
            </button>
          </div>
          <div>
            <h3 className="font-semibold">Additional Info</h3>
            {additionalInfo.map((a, i) => (
              <input
                key={i}
                value={a}
                onChange={(e) =>
                  handleListChange(
                    additionalInfo,
                    setAdditionalInfo,
                    i,
                    e.target.value
                  )
                }
                className="border border-gray-100 w-full px-2 py-1 my-1"
              />
            ))}
            <button
              onClick={() =>
                handleAddListItem(additionalInfo, setAdditionalInfo)
              }
              className="text-black text-sm mt-2 flex gap-2 justify-center items-center"
            >
              <CiSquarePlus size={24} className="text-[#27247B]" />
              Add Info
            </button>
          </div>
        </div>

        {/* Notes & Attachments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Notes</h3>
            {notes.map((n, i) => (
              <input
                key={i}
                value={n}
                onChange={(e) =>
                  handleListChange(notes, setNotes, i, e.target.value)
                }
                className="border border-gray-100 w-full px-2 py-1 my-1 outline-none"
              />
            ))}
            <button
              onClick={() => handleAddListItem(notes, setNotes)}
              className="text-black text-sm mt-2 flex gap-2 justify-center items-center"
            >
              <CiSquarePlus size={24} className="text-[#27247B]" />
              Add Note
            </button>
          </div>
          <div>
            <h3 className="font-semibold">Attachments</h3>
            {attachments.map((a, i) => (
              <input
                key={i}
                value={a}
                onChange={(e) =>
                  handleListChange(
                    attachments,
                    setAttachments,
                    i,
                    e.target.value
                  )
                }
                className="border border-gray-100 w-full px-2 py-1 my-1 outline-none"
              />
            ))}
            <button
              onClick={() => handleAddListItem(attachments, setAttachments)}
              className="text-black text-sm mt-2 flex gap-2 justify-center items-center"
            >
              <CiSquarePlus size={24} className="text-[#27247B]" /> Add
              Attachment
            </button>
          </div>
        </div>

        {/* Totals */}
        <div className="w-1/3 ml-auto space-y-2 text-sm  pt-10">
          {/* Subtotal */}
          <div className="flex justify-between border-b py-1">
            <span>Sub Total:</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>

          {/* Discount */}
          <div className="flex justify-between border-b py-1 items-center">
            <span>Discount (%):</span>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className=" px-2 py-1 rounded w-20 text-right outline-none"
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
            className="w-40 h-24 border border-dashed border-gray-400 flex items-center justify-center text-gray-400 cursor-pointer"
            onClick={() => stampInputRef.current.click()}
          >
            {stampURL ? (
              <img
                src={stampURL}
                alt="Stamp"
                className="h-full object-contain"
              />
            ) : (
              <span className="text-sm">Stamp/Signature</span>
            )}
            <input
              type="file"
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
          <button
            onClick={handleGenerate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow"
          >
            Customize
          </button>
        </div>
      </div>
    </main>
  );
}
