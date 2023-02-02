import React from "react";
import SimpleReactFooter from "simple-react-footer";

const FooterNew = () => {
  // Define the data for the footer
  const description = "";
  const title = " ";

  const columns = [
    {
      title: "Know Us",
      resources: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Press Coverage ",
        },
        {
          name: "Business Partnership ",
        },
        {
          name: "Become a Health Partner ",
        },
        {
          name: " Corporate Governance ",
        },
      ],
    },
    {
      title: "Our Policies",
      resources: [
        {
          name: "  Privacy Policy",
        },
        {
          name: "  Editorial Policy",
        },
        {
          name: " Return Policy",
        },
        {
          name: " IP Policy",
        },
        {
          name: "Grievance Redressal Policy",
        },
        {
          name: "Fake Jobs and Fraud Disclaimer",
        },
      ],
    },
    {
      title: "Our Services",
      resources: [
        {
          name: "Order Medicines",
        },
        {
          name: "Order Medicines",
        },
        {
          name: "Ayurveda Articles",
        },
        {
          name: " Articles",
        },
        {
          name: " Care Plan",
        },
      ],
    },
    {
      title: "Qucik Links",
      resources: [
        {
          name: " COVID Essentials",
        },
        {
          name: "Diabetes ",
        },
        {
          name: "Eyewear",
        },
        {
          name: "Ayush",
        },
        {
          name: "Ayurvedic",
        },
        {
          name: "Homeopathy",
        },
        {
          name: "Fitness",
        },
      ],
    },
    {
      title: "",
      resources: [
        {
          name: " Mom & Baby",
        },
        {
          name: "Devices ",
        },
        {
          name: "Surgicals",
        },
        {
          name: "Sexual Wellness",
        },
        {
          name: "Treatments",
        },
        {
          name: "Heart care",
        },
        {
          name: "Lung care ",
        },
      ],
    },
    {
      title: "",
      resources: [
        {
          name: " Stomach care",
        },
        {
          name: "Eye care ",
        },
        {
          name: " Nose care ",
        },
        {
          name: " Ear care",
        },
        {
          name: " Dental care",
        },
        {
          name: " Muscle care",
        },
        {
          name: "Liver care ",
        },
      ],
    },
  ];

  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
      />
    </div>
  );
};

export default FooterNew;
