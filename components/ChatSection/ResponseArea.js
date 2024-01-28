import Image from "next/image";
import React from "react";
import styles from "styles/components/ChatSection/ResponseArea.module.scss";

const ResponseArea = ({ queries }) => {
  return (
    <div className={styles["responseArea"]}>
      <div className={styles["responseAreaLogoContainer"]}>
        {" "}
        <Image
          src="/logo.png"
          className={styles["responseAreaLogo"]}
          alt="logo"
          width={700}
          height={175}
        />
      </div>

      {queries.map((data, index) => {
        return (
          <>
            <p key={index}>{data}</p>
          </>
        );
      })}
    </div>
  );
};

export default ResponseArea;
