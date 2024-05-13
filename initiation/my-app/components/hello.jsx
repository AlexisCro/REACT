import styles from "@/styles/Home.module.css";

function Hello(name) {
  return (
    <div>
      <div className={styles.hello}>
        <h1>
          Hi I'm <span>{name}</span> Web developer !
        </h1>
        <button>
          Contact
        </button>
      </div>
      <div className={styles.img_container}>
        <img src="/profil_picture.jpg" alt="profil_picture"/>
      </div>
    </div>
  )
}

export default Hello;