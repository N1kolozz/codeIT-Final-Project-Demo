
import Image from "next/image";
import styles from "./page.module.css";
import SignOut from "@/components/SignOut/SignOut";



const Profile = async () => {
  let profile;
  try {
    const data = await fetch("https://dummyjson.com/users/1");
    profile = await data.json();

    if (profile.message) {
      throw Error(profile.message);
    }
  } catch (error) {
    throw Error(error);
  }

 

  return (
    <div className={styles.container}>
      <Image
        src={profile.image}
        className={styles.image}
        alt="Profile Image"
        width={100}
        height={100}
      />
      <section className={styles.section}>
        <div className={styles.splitContainer}>
        <div className={styles.infoWrapper}>
          <p>FirstName: </p>
          <p>{profile.firstName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>MaidenName: </p>
          <p>{profile.maidenName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>lastName: </p>
          <p>{profile.lastName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>Phone: </p>
          <p>{profile.phone}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>Email: </p>
          <p>{profile.email}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>BirthDate: </p>
          <p>{profile.birthDate}</p>
        </div>
        </div>
        <div className={styles.splitContainer}>
        <div className={styles.infoWrapper}>
          <p>Address: </p>
          <p>{profile.address.address}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>City: </p>
          <p>{profile.address.city}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>State: </p>
          <p>{profile.address.state}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>University: </p>
          <p>{profile.university}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>Company: </p>
          <p>{profile.company.name}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>Company Address: </p>
          <p>{profile.company.address.address}</p>
        </div>
        </div>
        <SignOut/>
      </section>
    </div>
  );
};

export default Profile;
