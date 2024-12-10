import { useState } from "react";
import Helpers from "../../helpers";
import "./index.css";
import CatList from "../CatList/CatList";

import { useSelector, useDispatch } from "react-redux";
import {setLogo} from "../../redux/slices/logoSlice";

function Article(props) {
  const dispatch = useDispatch();

  const [cache, _setCache] = useState(new Helpers());
  const [id, setId] = useState(undefined);
  const [response, setResponse] = useState("");

  const [logoText, setLogoText] = useState("");

  const changeLogo = () => {
    console.log("LOGO NEW ", logoText);
    dispatch(setLogo(logoText))
  }

  const fireCache = () => {
    id === "" ?
      setResponse(cache.getId(undefined)) :
    setResponse(cache.getId(id));
  };

  return (
    <article>
      <input type="text" onChange={(text) => setLogoText(text.target.value)}/>
      <button onClick={() => changeLogo()}>uygtfghjuio</button>
      <h1>коти</h1>
      <CatList />
      <h1>кеш</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="param"
            onChange={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}
          />
          <button onClick={() => fireCache()}>Fire</button>
        </div>

        <textarea
          name="helperOutput"
          id="helperOutput"
          value={response}
          readOnly
        ></textarea>
      </div>

      <h2>Налаштування сторінки</h2>
      <p>
        Після виконная команди npx create-react-app my-app, в теці my-app Ви
        побачите наступну структуру:
      </p>
      <ul>
        <li>Тека node_modules – тека куди встанавлюются пакети з npm</li>
        <li>
          Тека public – тека з загально доступними файлами, такими як
          index.html, favicon, robots.txt та інші.
        </li>
        <li>Тека src – тут лежить вихідний код проекту</li>
        <li>
          Файли package.json та package-lock.json – файли з описом залежностей,
          npm скриптів, та іншої службової інформації
        </li>
      </ul>
      <h2>Налаштування сторінки. Index.html</h2>
      <p>
        Файл index.html знаходится в теці public і містить в собі html вузол в
        який буде монтуватися наш додаток. За замовчування це div з id=root
      </p>
      <h2>Налаштування сторінки. Тека src</h2>
      <p>
        В цій теці зберігаєтся весь вихідний кол проекту. Зокрема файл index.js
        – який є вхідною точкою дотатку, тут вказуєтся точка мотування, та
        викликаєтся рендерінг головного компоненту. Крім того тут можуть
        підключатись стилі, або викликатись якісь службові скрипти.
      </p>
      <p>
        Важливо що структура проекту яку надає нам create-react-app це лише один
        з варінтів застосування React, будь що у цій структурі можна змінити на
        власний розсуд. Проте для цього іноді треба мати більш глибоке розуміння
        того як процює збірка проекту яку пропонує create-react-app.
      </p>
      <h2>Налаштування сторінки. Головний компонет.</h2>
      <p>
        Файл App.js – є головним компонентом з якого починаєтся додаток. По суті
        це звичайний компонент як і всі інші, проте саме з нього починаєтся
        прокет. Зазвичай в ньому розміщені компоненти які є не змінними такі як
        header, footer, menu, а також комопнент для роутингу.
      </p>
      <h2>Віртуальний DOM.</h2>
      <p>
        <b>Віртуальний DOM</b> – це концепція програмування в якій «віртуальне»
        представлення зберігаєтся в памяті та синхронізуєтся зі «справжнім» DOM,
        за допомогою бібліотеки, такої як ReactDOM.
      </p>
      <p>
        Такий підхід і робить React декларативним. Ви вказуєте в якому стані має
        знаходитись DOM, а React робить так щоб DOM відповідав цьому стану.
      </p>
      <p>
        Проте віртуальний DOM це скоріше шаблон ніж конкретна технологія. У
        React цей паттерн реалізуєтся за допомогою бібліотеки ReactDOM
      </p>
      <h2>Елементи React</h2>
      <p>В React віртуальний DOM зазвийчай асоціюєтся з елементами.</p>
      <p>
        <b>React-елементи</b> - це складові блоки React-додатків. Їх можна
        переплутати з більш відомою концепцією «компонентів», але на відміну від
        компонента елемент описує те, що ви хочете побачити на
        екрані. React-елементи іммутабельні.
      </p>
      <p>
        Зазвичай елементи не використовуються безпосередньо, а повертаються
        компонентами.
      </p>
      <h2>Компоненти React</h2>
      <p>
        Компоненти дають змогу розбити інтерфейс на незалежні частини, про які
        легко думати окремо. Їх можна складати разом та використовувати кілька
        разів
      </p>
      <p>
        Багато в чому компоненти поводяться як звичайні функції JavaScript. Вони
        приймають довільні вхідні дані (так звані пропси) і повертають
        React-елементи, що описують, що ми хочемо побачити на екрані.
      </p>
      <p>Імена компонентів завжди повинні починатись з великої літери.</p>
      <p>
        <b>React-компоненти</b> - це маленькі, повторно використовувані частини
        коду, які повертають React-елементи для відображення на
        сторінці. Найпростіший React-компонент – це проста функція JavaScript,
        яка повертає елементи React. Компоненти також можуть бути ES6 класами.
      </p>
      <h2>Компоненти React. Props</h2>
      <p>
        Props - це вхідні дані React-компонентів, що передаються від
        батьківського компонента дочірньому компоненту. Пам'ятайте, 
        <code>props</code> призначені лише для читання. У жодному разі їх не
        слід змінювати.
      </p>
    </article>
  );
}

export default Article;
