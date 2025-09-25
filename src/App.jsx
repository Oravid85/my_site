import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Header } from "./components/Header"
import { TodoItem } from "./components/TodoItem"

function App() {
  return (
    <>
      <Header />

      <div>
        <div className="row"></div>
        <div className="leftcolumn">
          <div className="card">
           
          <div className="rightcolumn">
            <div className="about-the-lecture">
              <h2 style={{ textAlign: "center" }}>על ההרצאה</h2>
              <p style={{ textAlign: "justify" }}>
                אריס סאן, הוא אחד מאבות המוזיקה והתרבות הישראלית וחלוץ המוזיקה
                הים-תיכונית בארץ.
              </p>
              <p style={{ textAlign: "justify" }}>
                מי שהגיע ליפו כנער יווני בן17 והתחיל לנגן גיטרה במועדונים, והפך
                לאחת מאושיות התרבות הגדולות ביותר בישראל בשנות ה-60 וה-70,
                'הוליד' דורות של מוזיקאים חדשים שהביאו את הקולות והניחוחות של
                הים התיכון והמזרח לקדמת הבמה בישראל.
              </p>
              <p style={{ textAlign: "justify" }}>
                שעה של סיפורים, סרטונים, שירים, מוזיקה חיה ותמונות שבה נכיר את
                אריס סאן, דמותו, הסיפור שלו, מאיפה בא, ולאן הלך? וננסה להבין איך
                הצליח ב-13 שנים להשאיר חותם על ישראל, ולהפוך לפרק בסיפור שלה,
                שמלווה אותה עד היום ונוכח כמעט בכל פינה.
              </p>
            </div>
          </div>
          <div className="leftcolumn">
            <div className="card">
              <div className="about-me">
                <h2>עלי</h2>
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  אז מה עשיתי ב-20 השנים האחרונות?
                </p>
                <p style={{ textAlign: "justify" }}> הדרכתי. </p>
                <p style={{ textAlign: "justify" }}>
                  הדרכתי פעוטות, ילדים, בני-נוער ומבוגרים. הדרכתי בתנועות נוער,
                  ועדי עובדים, חיילים וקצינים בצה"ל. הדרכתי במוזאונים, בטיולים,
                  בסיורים לימודיים-תכניים, בהרצאות ובשיעורים.
                </p>
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  חוץ מזה – אני מנגן, הרבה.{" "}
                </p>
                <p style={{ textAlign: "justify" }}>
                  אם יש לזה מיתרים – רוב הסיכויים שאני יכול לנגן על זה. נכון, יש
                  נגנים טובים ממני – אז מזל שאני לא עושה מופעי מוזיקה.
                </p>
                <p style={{ textAlign: "justify" }}>
                  והדבר שאני הכי אוהב לעשות בעולם – זה לספר סיפורים: סיפורים
                  עשירים, מעניינים ומורכבים על דמויות ואירועים גדולים וקטנים,
                  שהשפיעו על החיים של כולנו, ועיצבו את הזהות והתרבות שלנו, כאן
                  בישראל.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="rightcolumn">
          <div className="card">
            <div className="marketing">
              <h2> לתיאום הרצאות ומידע נוסף</h2>
              <form action="https://formspree.io/f/xrbgvagl" method="post">
                <p> שם מלא</p>
                <input
                  style={{ borderRadius: "30px", textAlign: "right" }}
                  type="text"
                  placeholder="שם מלא"
                  id="name"
                  name="name"
                />
                <p>כתובת דוא"ל</p>
                <input
                  style={{ borderRadius: "30px", textAlign: "right" }}
                  type="email"
                  placeholder="דואל"
                  id="mail"
                  name="e-mail"
                />
                <p>טלפון</p>
                <input
                  style={{ borderRadius: "30px", textAlign: "right" }}
                  type="tel"
                  placeholder="טלפון"
                  id="phone"
                  name="tel"
                />
                <div>
                  <button id="btn">שלח</button>
                </div>
              </form>
            </div>
            <br />
            <div className="recomandations">
              <h2>משתתפים מספרים</h2>
              <div className="Textslideshow-container">
                <div className="myTextSlides">
                  <q>היתה הרצאה מעניינת. החכמנו</q>
                  <p>- גילמאים בחברותא</p>
                </div>
                <div className="myTextSlides">
                  <q>
                    היה מאד מעניין, אהבתי את ההגשה את קטעי הקישור, הסיפור ואיך
                    שסיפר היה מעניין, ברור וממצה, אהבתי מאד.
                  </q>
                  <p>- גימלאים בחברותא</p>
                </div>
                <div className="myTextSlides">
                  <q>
                    ההרצאה הייתה מעניינת, קולחת וממצה. מאד מאד אהבתי. תודה רבה
                  </q>
                  <p>- גימלאים בחברותא</p>
                </div>
                <a className="prev" onClick={() => plusTextSlides(-1)}>
                  &#10094;
                </a>
                <a className="next" onClick={() => plusTextSlides(1)}>
                  &#10095;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
      <div className="footer">
        <h3>לפרטים נוספים </h3>
        <p style={{ textAlign: "right" }}>
          <i className="fa-brands fa-whatsapp">
            <a
              href="https://wa.me/+972546738697"
              target
              style={{ textDecoration: "none", color: "white" }}
            >
              אפשר לתפוס אותי בווטסאפ
            </a>
          </i>
        </p>
        <p style={{ textAlign: "right" }}>
          <i className="fa-regular fa-envelope">
            <a
              href="mailto:oravid85@gmail.com?subject=אני רוצה הרצאה"
              target
              style={{ textDecoration: "none", color: "white" }}
            >
              שלחו לי דוא"ל
            </a>
          </i>
        </p>
        <div>אשמח לפגוש אתכם!</div>
      </div>
    </>
  )
}
