import { Ref } from "react";
import styles from "./home.module.scss";

interface IHomeLayoutProps {
  layoutRef: Ref<HTMLInputElement>;
}

const HomeLayout = (props: IHomeLayoutProps) => {
  const { layoutRef } = props;
  return (
    <div className={styles.container}>
      <div ref={layoutRef} />
      <div className={styles.label}>
        Hangar Door Line - Do not Put Airplanes Past Line
      </div>
    </div>
  );
};

export default HomeLayout;
