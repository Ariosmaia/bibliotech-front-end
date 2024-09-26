let isMenuOpen = false;
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");
const main = document.querySelector("#main");

const iconMenu = document.querySelector("#icon-menu");
const iconClose = document.querySelector("#icon-close");

const menuItems = document.querySelectorAll(".menu-item");

function openMenu() {
  const size = "250px";

  menu.style.width = size;
  header.style.marginLeft = size;
  main.style.marginLeft = size;
  iconMenu.style.display = "none";
  iconClose.style.display = "block";
}

function closeMenu() {
  const size = "60px";

  menu.style.width = size;
  header.style.marginLeft = size;
  main.style.marginLeft = size;
  iconMenu.style.display = "block";
  iconClose.style.display = "none";
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  menuItems.forEach((item) => {
    const description = item.querySelector("span");
    description.style.display = isMenuOpen ? "block" : "none";
  });

  if (isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
    closeSubmenus();
  }
}

function toggleSubmenu(submenuId) {
  const submenu = document.getElementById(submenuId);
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

function closeSubmenus() {
  const submenus = document.querySelectorAll(".submenu");
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });
}

const authors = [
  {
    authorName: "Jane Doe",
    email: "janedoe@example.com",
    birthdate: "1910-05-14",
    status: "active",
  },
  {
    authorName: "John Smith",
    email: "johnsmith@example.com",
    birthdate: "1923-08-12",
    status: "inactive",
  },
  {
    authorName: "Mary Johnson",
    email: "maryj@example.com",
    birthdate: "1932-11-21",
    status: "active",
  },
  {
    authorName: "Robert Brown",
    email: "robertbrown@example.com",
    birthdate: "1940-01-05",
    status: "active",
  },
  {
    authorName: "Patricia Taylor",
    email: "patriciat@example.com",
    birthdate: "1951-03-15",
    status: "inactive",
  },
  {
    authorName: "Michael Jones",
    email: "michaelj@example.com",
    birthdate: "1960-07-10",
    status: "active",
  },
  {
    authorName: "Linda Garcia",
    email: "lindag@example.com",
    birthdate: "1972-12-30",
    status: "active",
  },
  {
    authorName: "William Martinez",
    email: "william@example.com",
    birthdate: "1985-06-19",
    status: "inactive",
  },
  {
    authorName: "Elizabeth Rodriguez",
    email: "elizabethr@example.com",
    birthdate: "1930-02-28",
    status: "active",
  },
  {
    authorName: "David Wilson",
    email: "davidw@example.com",
    birthdate: "1955-09-09",
    status: "inactive",
  },
  {
    authorName: "Barbara Anderson",
    email: "barbara@example.com",
    birthdate: "1964-10-15",
    status: "active",
  },
  {
    authorName: "Charles Lee",
    email: "charlesl@example.com",
    birthdate: "1970-03-22",
    status: "active",
  },
  {
    authorName: "Susan White",
    email: "susanw@example.com",
    birthdate: "1938-07-07",
    status: "inactive",
  },
  {
    authorName: "Thomas Harris",
    email: "thomash@example.com",
    birthdate: "1950-04-13",
    status: "active",
  },
  {
    authorName: "Margaret Clark",
    email: "margaretc@example.com",
    birthdate: "1968-11-01",
    status: "active",
  },
  {
    authorName: "Christopher Lewis",
    email: "chrisl@example.com",
    birthdate: "1975-05-05",
    status: "inactive",
  },
  {
    authorName: "Daniel Walker",
    email: "danielw@example.com",
    birthdate: "1945-08-23",
    status: "active",
  },
  {
    authorName: "Nancy Hall",
    email: "nancyh@example.com",
    birthdate: "1927-09-25",
    status: "inactive",
  },
  {
    authorName: "Paul Allen",
    email: "paula@example.com",
    birthdate: "1962-01-02",
    status: "active",
  },
  {
    authorName: "Karen Young",
    email: "kareny@example.com",
    birthdate: "1936-10-14",
    status: "active",
  },
  {
    authorName: "Steven King",
    email: "stevenk@example.com",
    birthdate: "1947-11-22",
    status: "active",
  },
  {
    authorName: "Donna Scott",
    email: "donnas@example.com",
    birthdate: "1959-02-16",
    status: "inactive",
  },
  {
    authorName: "Edward Green",
    email: "edwardg@example.com",
    birthdate: "1978-06-27",
    status: "active",
  },
  {
    authorName: "Michelle Adams",
    email: "michellea@example.com",
    birthdate: "1982-04-10",
    status: "inactive",
  },
  {
    authorName: "George Baker",
    email: "georgeb@example.com",
    birthdate: "1911-07-18",
    status: "active",
  },
  {
    authorName: "Betty Gonzalez",
    email: "bettyg@example.com",
    birthdate: "1929-03-30",
    status: "inactive",
  },
  {
    authorName: "Larry Nelson",
    email: "larryn@example.com",
    birthdate: "1941-05-08",
    status: "active",
  },
  {
    authorName: "Sandra Carter",
    email: "sandrac@example.com",
    birthdate: "1957-12-12",
    status: "active",
  },
  {
    authorName: "Joseph Mitchell",
    email: "josephm@example.com",
    birthdate: "1969-07-01",
    status: "inactive",
  },
  {
    authorName: "Lisa Perez",
    email: "lisap@example.com",
    birthdate: "1973-01-19",
    status: "active",
  },
  {
    authorName: "Brian Roberts",
    email: "brianr@example.com",
    birthdate: "1986-10-06",
    status: "active",
  },
  {
    authorName: "Sarah Phillips",
    email: "sarahp@example.com",
    birthdate: "1915-04-17",
    status: "inactive",
  },
  {
    authorName: "Kenneth Evans",
    email: "kennethe@example.com",
    birthdate: "1933-02-11",
    status: "active",
  },
  {
    authorName: "Deborah Turner",
    email: "deborah@example.com",
    birthdate: "1949-08-05",
    status: "inactive",
  },
  {
    authorName: "Eric Collins",
    email: "ericc@example.com",
    birthdate: "1967-09-12",
    status: "active",
  },
  {
    authorName: "Jessica Edwards",
    email: "jessicae@example.com",
    birthdate: "1974-11-07",
    status: "active",
  },
  {
    authorName: "Mark Stewart",
    email: "marks@example.com",
    birthdate: "1953-10-29",
    status: "inactive",
  },
  {
    authorName: "Sharon Sanchez",
    email: "sharons@example.com",
    birthdate: "1961-12-21",
    status: "active",
  },
  {
    authorName: "Jason Morris",
    email: "jasonm@example.com",
    birthdate: "1979-03-03",
    status: "inactive",
  },
  {
    authorName: "Dorothy Rogers",
    email: "dorothyr@example.com",
    birthdate: "1924-06-16",
    status: "active",
  },
  {
    authorName: "Raymond Reed",
    email: "raymondr@example.com",
    birthdate: "1939-05-27",
    status: "inactive",
  },
  {
    authorName: "Cynthia Cook",
    email: "cynthiac@example.com",
    birthdate: "1958-07-31",
    status: "active",
  },
  {
    authorName: "Kevin Morgan",
    email: "kevinm@example.com",
    birthdate: "1965-10-09",
    status: "inactive",
  },
  {
    authorName: "Rebecca Bell",
    email: "rebeccab@example.com",
    birthdate: "1971-01-13",
    status: "active",
  },
  {
    authorName: "Gary Howard",
    email: "garyh@example.com",
    birthdate: "1946-02-04",
    status: "active",
  },
  {
    authorName: "Shirley Ward",
    email: "shirleyw@example.com",
    birthdate: "1937-12-18",
    status: "inactive",
  },
  {
    authorName: "Ryan Torres",
    email: "ryant@example.com",
    birthdate: "1980-08-15",
    status: "active",
  },
  {
    authorName: "Amy Peterson",
    email: "amyp@example.com",
    birthdate: "1987-09-26",
    status: "active",
  },
  {
    authorName: "Jeffrey Gray",
    email: "jeffreyg@example.com",
    birthdate: "1912-10-20",
    status: "inactive",
  },
  {
    authorName: "Angela Ramirez",
    email: "angelar@example.com",
    birthdate: "1943-11-17",
    status: "active",
  },
  {
    authorName: "Scott Bryant",
    email: "scottb@example.com",
    birthdate: "1952-03-28",
    status: "inactive",
  },
];

function deleteAuthor(index) {
  // TODO: deletar o autor da lista
}

function addAuthorRow(authorName, email, birthdate, status, index) {
  return `
         <tr>
            <td>Nome do autor</td>
            <td>Nome do autor</td>
            <td>Nome do autor</td>
            <td>Nome do autor</td>
            <td class="table-actions">
                <button class="edit-button">
                    <i class="material-symbols-sharp"> edit</i>
                </button>
                <button onclick="deleteAuthor(${index})" class="delete-button">
                    <i class="material-symbols-sharp"> delete</i>
                </button>
            </td>
        </tr>
    `;
}

function injectableRows() {
  // TODO: adicionar as linhas da tabela
}

injectableRows();
