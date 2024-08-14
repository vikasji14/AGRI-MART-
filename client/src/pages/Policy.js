import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="Privacy Policy"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
          />
        </div>
        <div className="col-md-6">
          <h2>Privacy Policy</h2>
          <p>
            At Agri-Mart, we collect personal and payment information to process your orders
            and enhance our services.
          </p>
          <p>
            Your data may be shared with service providers, but only as required by law, ensuring
            it is protected with industry-standard security measures.
          </p>
          <p>
            You have the right to access, correct, or delete your data anytime. For any inquiries or further details,
            feel free to <strong>contact us</strong>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
