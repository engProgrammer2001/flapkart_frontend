import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div>
        <h1 className="text-3xl text-center text-blue-900 font-bold">
          Privacy Policy
        </h1>
      </div>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">Introduction</h2>
      </div>
      <p>
        Welcome to flafkart.com. We value the trust you place in us and are
        committed to protecting your privacy. This Privacy Policy outlines how
        we collect, use, and safeguard your information when you visit our
        website and use our services.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">
          Information We Collect
        </h2>
      </div>
      <div className="w-full my-4">
        <h4 className="text-2xl text-blue-800 font-bold">
          Personal Information
        </h4>
      </div>

      <p>
        When you visit our site, create an account, make a purchase, or contact
        us, we may collect the following personal information: Name <br /> Email
        address <br /> Phone number <br /> Billing and shipping <br /> addresses{" "}
        <br /> Payment information (credit/debit card details, etc.) Purchase
        history
      </p>
      <div className="w-full my-4">
        <h4 className="text-2xl text-blue-800 font-bold">
          Non-Personal Information
        </h4>
      </div>
      <p>
        We may also collect non-personal information that does not identify you
        directly, such as: <br /> Browser type <br /> Device type <br /> IP
        address <br /> Operating system Pages visited and time spent on the site
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">
          How We Use Your Information
        </h2>
      </div>
      <p>
        <span className="font-bold mb-5 text-gray-600 pb-5">
          {" "}
          We use the information we collect for the following purposes:
        </span>{" "}
        <br />
        Processing Orders: To process and fulfill your orders, manage payments,
        and deliver products. <br /> Customer Service: To provide customer
        support and respond to inquiries. <br /> Personalization: To personalize
        your shopping experience and recommend products that may be of interest.{" "}
        <br /> Marketing: To send promotional emails, newsletters, and offers.
        (You can opt-out of these communications at any time.) <br />{" "}
        Improvement: To improve our website, services, and overall shopping
        experience. <br /> Security: To detect and prevent fraud, abuse, or
        illegal activities.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">
          Cookies and Tracking Technologies
        </h2>
      </div>
      <p>
        <span className="font-bold mb-5 text-gray-600 pb-5">
          We use cookies and similar tracking technologies to enhance your
          browsing experience and gather information about how you use our site.
          This information helps us to:
        </span>
        <br />
        Remember your preferences and settings <br /> Keep track of your
        shopping cart <br />
        Analyze site traffic and usage patterns
      </p>
      <p>
        You can control the use of cookies through your browser settings, but
        disabling cookies may affect the functionality of our site.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">Data Security</h2>
      </div>
      <p>
        We implement appropriate security measures to protect your personal
        information from unauthorized access, alteration, disclosure, or
        destruction. However, no internet transmission or electronic storage
        method is 100% secure, and we cannot guarantee absolute security.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">
          Cookies and Tracking Technologies
        </h2>
      </div>
      <p>
        <span className="font-bold mb-5 text-gray-600 pb-5">
          We use cookies and similar tracking technologies to enhance your
          browsing experience and gather information about how you use our site.
          This information helps us to:
        </span>
        <br />
        Remember your preferences and settings <br /> Keep track of your
        shopping cart <br />
        Analyze site traffic and usage patterns
      </p>
      <p>
        You can control the use of cookies through your browser settings, but
        disabling cookies may affect the functionality of our site.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">Data Security</h2>
      </div>
      <p>
        We implement appropriate security measures to protect your personal
        information from unauthorized access, alteration, disclosure, or
        destruction. However, no internet transmission or electronic storage
        method is 100% secure, and we cannot guarantee absolute security.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">
          Cookies and Tracking Technologies
        </h2>
      </div>
      <p>
        <span className="font-bold mb-5 text-gray-600 pb-5">
          We use cookies and similar tracking technologies to enhance your
          browsing experience and gather information about how you use our site.
          This information helps us to:
        </span>
        <br />
        Remember your preferences and settings <br /> Keep track of your
        shopping cart <br />
        Analyze site traffic and usage patterns
      </p>
      <p>
        You can control the use of cookies through your browser settings, but
        disabling cookies may affect the functionality of our site.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">Data Security</h2>
      </div>
      <p>
        We implement appropriate security measures to protect your personal
        information from unauthorized access, alteration, disclosure, or
        destruction. However, no internet transmission or electronic storage
        method is 100% secure, and we cannot guarantee absolute security.
      </p>
      <div className="w-full my-4">
        <h2 className="text-2xl text-blue-800 font-bold">
          Changes to This Privacy Policy
        </h2>
      </div>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We will notify you of any
        significant changes by posting the new policy on our website and
        updating the effective date.
      </p>
      <div>
        <div className="w-full my-4">
          <h2 className="text-2xl text-blue-800 font-bold">Contact Us</h2>
        </div>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <div className="py-5 ">
          <Button
            onClick={() => navigate("/contact")}
            color="warning"
            variant="contained"
            className="p-2"
          >
            For More Information{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
