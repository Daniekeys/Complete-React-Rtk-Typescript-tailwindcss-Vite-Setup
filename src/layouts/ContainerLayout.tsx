const styles = {
  parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto   ",
  container: "2xl:container 2xl:mx-auto ",
  chiefCenter: "max-w-[1500px] w-full  px-4 md:px-6 mx-auto  ",
};
interface layoutprops {
  children: any;
}
const ContainerLayout = ({ children }: layoutprops) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default ContainerLayout;
