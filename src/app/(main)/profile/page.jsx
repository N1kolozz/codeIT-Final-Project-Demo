import Image from "next/image";
import styles from "./page.module.css";
import SignOut from "@/components/SignOut/SignOut";

import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaUniversity,
  FaBuilding
} from "react-icons/fa";

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
            <p><FaUser className={styles.icon} /> First Name:</p>
            <p>{profile.firstName}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaUser className={styles.icon} /> Maiden Name:</p>
            <p>{profile.maidenName}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaUser className={styles.icon} /> Last Name:</p>
            <p>{profile.lastName}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaPhone className={styles.icon} /> Phone:</p>
            <p>{profile.phone}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaEnvelope className={styles.icon} /> Email:</p>
            <p>{profile.email}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaBirthdayCake className={styles.icon} /> Birth Date:</p>
            <p>{profile.birthDate}</p>
          </div>
        </div>

        <div className={styles.splitContainer}>
          <div className={styles.infoWrapper}>
            <p><FaMapMarkerAlt className={styles.icon} /> Address:</p>
            <p>{profile.address.address}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaMapMarkerAlt className={styles.icon} /> City:</p>
            <p>{profile.address.city}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaMapMarkerAlt className={styles.icon} /> State:</p>
            <p>{profile.address.state}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaUniversity className={styles.icon} /> University:</p>
            <p>{profile.university}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaBuilding className={styles.icon} /> Company:</p>
            <p>{profile.company.name}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p><FaMapMarkerAlt className={styles.icon} /> Company Address:</p>
            <p>{profile.company.address.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;