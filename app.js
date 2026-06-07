// ============================================================
//  BookMySeat — Movie Theatre Booking System
// ============================================================

// ---------- DATA ----------
const MOVIES = [
  {
    id: 1,
    title: "Ikkis",
    image: "https://m.media-amazon.com/images/S/pv-target-images/6bcd9f5519922ac8336a59eab3da6ea617a3eae52030b16b649c453cd54e5c36.jpg",
    genre: "Drama / Action",
    lang: "Hindi",
    rating: "U/A",
    duration: "3h 1m",
    basePrice: 280,
    premiumPrice: 400,
    showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "9:15 PM"],
    imdb: "8.5",
  },
  {
    id: 2,
    title: "Dhurandhar",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhurandhar-the-revenge-et00478890-1772893614.jpg",
    genre: "Drama / Thriller",
    lang: "Hindi",
    rating: "A",
    duration: "2h 7m",
    basePrice: 320,
    premiumPrice: 450,
    showtimes: ["11:00 AM", "2:15 PM", "6:00 PM", "9:30 PM"],
    imdb: "8.9",
  },
  {
    id: 3,
    title: "Spider Man 2",
    image: "https://images.moviesanywhere.com/e45bfc010f1e0626b1ee9efbe2726e55/7e42ca11-be74-41b9-986c-3e5a8a431fe3.jpg",
    genre: "Action",
    lang: "English",
    rating: "U/A",
    duration: "2h 15m",
    basePrice: 250,
    premiumPrice: 370,
    showtimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    imdb: "8.2",
  },
  {
    id: 4,
    title: "Bhool Bhulaiyaa 3",
    image: "https://cdn.district.in/movies-assets/images/cinema/Bhool-Bhulaiyaa-3-cc009b20-661a-11f0-860b-0123967fd46d.jpg",
    genre: "Horror",
    lang: "English",
    rating: "U",
    duration: "2h 49m",
    basePrice: 300,
    premiumPrice: 450,
    showtimes: ["11:30 AM", "3:00 PM", "7:00 PM"],
    imdb: "8.7",
  },
  {
    id: 5,
    title: "Drishyam",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Drishyam_2015_film.jpg/250px-Drishyam_2015_film.jpg",
    genre: "Thriller / Crime",
    lang: "Hindi",
    rating: "A",
    duration: "2h 40m",
    basePrice: 270,
    premiumPrice: 390,
    showtimes: ["10:00 AM", "1:00 PM", "4:30 PM", "8:45 PM"],
    imdb: "7.6",
  },
  {
    id: 6,
    title: "Sitaare Zameen Par",
    image: "https://www.rajhanscinemas.com/MovieImages/szp.jpg",
    genre: "Comedy",
    lang: "Hindi",
    rating: "U/A",
    duration: "3h 10m",
    basePrice: 290,
    premiumPrice: 420,
    showtimes: ["9:30 AM", "1:15 PM", "5:15 PM", "9:45 PM"],
    imdb: "8.0",
  },
  {
    id: 7,
    title: "Passenger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUO3KsJZZZK9szHEER4ahJApREk5llqG92g&s",
    genre: "Romance",
    lang: "English",
    rating: "A",
    duration: "2h 40m",
    basePrice: 270,
    premiumPrice: 390,
    showtimes: ["10:00 AM", "1:00 PM", "4:30 PM", "8:45 PM"],
    imdb: "7.6",
  },
  {
    id: 8,
    title: "Singham Again",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhl2Mh0nflZd9RBvU7UpE_-YMn5EsvxLiE0NlBJmbl_kHXyIqVIOlBOPmMRH6E00KbycK&s=10",
    genre: "Action",
    lang: "English",
    rating: "A",
    duration: "2h 40m",
    basePrice: 270,
    premiumPrice: 390,
    showtimes: ["10:00 AM", "1:00 PM", "4:30 PM", "8:45 PM"],
    imdb: "7.6",
  },
  {
    id: 9,
    title: "Kerala Story 2",
    image: "https://in.bmscdn.com/events/moviecard/ET00484171.jpg",
    genre: "Thriller",
    lang: "English",
    rating: "A",
    duration: "2h 40m",
    basePrice: 270,
    premiumPrice: 390,
    showtimes: ["10:00 AM", "1:00 PM", "4:30 PM", "8:45 PM"],
    imdb: "7.6",
  },
  {
    id: 10,
    title: "KGF Chapter 2",
    image: "https://m.media-amazon.com/images/S/pv-target-images/dbe30e1e25813a698e0da679a5968c380bd2d1b4e6966394d4c964c6b3301896.jpg",
    genre: "Action",
    lang: "English",
    rating: "A",
    duration: "2h 40m",
    basePrice: 270,
    premiumPrice: 390,
    showtimes: ["10:00 AM", "1:00 PM", "4:30 PM", "8:45 PM"],
    imdb: "7.6",
  },
   {
    id: 11,
    title: "Saiyaara",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00447951-zyrusuuzke-portrait.jpg",
    genre: "Drama / Romance",
    lang: "English",
    rating: "A",
    duration: "2h 40m",
    basePrice: 270,
    premiumPrice: 390,
    showtimes: ["10:00 AM", "1:00 PM", "4:30 PM", "8:45 PM"],
    imdb: "7.6",
  },
  {
    id: 12,
    title: "3 idiots",
    image: "https://c8.alamy.com/comp/P4APGH/original-film-title-3-idiots-english-title-3-idiots-film-director-rajkumar-hirani-year-2009-credit-eros-international-media-album-P4APGH.jpg",
    genre: "Comedy / Drama",
    lang: "English",
    rating: "A",
    duration: "2h 40m",
    basePrice: 270,
    premiumPrice: 390,
    showtimes: ["10:00 AM", "1:00 PM", "4:30 PM", "8:45 PM"],
    imdb: "7.6",
  },
];

const COMING_SOON = [
  {
    title: "Bandar",
    image: "https://cdn.district.in/movies-assets/images/cinema/Bandar%20(1)-6207ff30-4a01-11f1-ab00-2bad8ba2a996.jpg?im=Resize,width=320",
    genre: "Drama / Thriller",
    lang: "Hindi",
    releaseDate: "14 Aug 2026",
    imdb: "N/A",
  },
  {
    title: "Peddi",
    image: "https://storage.googleapis.com/magicpin-images-v2/ace-blog/peddi-ram-charan/cover.jpg",
    genre: "Action / Drama",
    lang: "Hindi",
    releaseDate: "25 Dec 2026",
    imdb: "N/A",
  },
   {
    title: "Booth Bangla",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXbTEc3tBTlBZd163h2DEydRJL85Z5WM1KQ&s",
    genre: "Horror / Comedy",
    lang: "Hindi",
    releaseDate: "15 Aug 2026",
    imdb: "N/A",
  },
  {
    title: "Obsession",
    image: "https://ucsdguardian.org/wp-content/uploads/2026/05/Obsession-800x1200.jpg",
    genre: "Romance / Drama",
    lang: "Hindi",
    releaseDate: "15 Aug 2026",
    imdb: "N/A",
  },
  {
    title: "Chand Mera Dil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3j7uZCl1S8WYQODNG19Gki07m_8_sPoIfA&s",
    genre: "Romance",
    lang: "Hindi",
    releaseDate: "15 Aug 2026",
    imdb: "N/A",
  },
  {
    title: "Hai Jawani Toh Ishq Hona Hai",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00447266-yulbngmvhv-portrait.jpg",
    genre: "Romance / Comedy",
    lang: "Hindi",
    releaseDate: "15 Aug 2026",
    imdb: "N/A",
  },
{
  
    title: "Return of the Jungle",
    image: "https://m.media-amazon.com/images/M/MV5BYzk4YjQ5MmEtNGIxNC00YzU0LWE2MmItMjczY2I2N2Q0MmY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: "Animated",
    lang: "Hindi",
    releaseDate: "15 Aug 2026",
    imdb: "N/A",
  },
  {
    title: "krishnavataram Part 1: The Heart",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/krishnavataram-part-1-the-heart-et00495498-1779699659.jpg",
    genre: "Devotional",
    lang: "Hindi",
    releaseDate: "15 Aug 2026",
    imdb: "N/A",
  },
];

// Seat layout: 7 rows × 10 seats, last 2 rows = premium
// Pre-booked random seats per movie (seeded per movie id)
function generateBookedSeats(movieId, showtime) {
  const seed = movieId * 31 + showtime.length;
  const booked = new Set();
  const r = (n, s) => (Math.sin(s * n) * 10000) % 1;
  for (let i = 0; i < 14; i++) {
    const row = Math.floor(Math.abs(r(i + seed, seed + 7)) * 7);
    const col = Math.floor(Math.abs(r(i + seed + 3, seed + 13)) * 10);
    booked.add(`${row}-${col}`);
  }
  return booked;
}

// ---------- STATE ----------
let state = {
  currentSection: "movies",
  selectedMovie: null,
  selectedDate: null,   // ← ADD this line
  selectedTime: null,
  selectedSeats: [],
  bookedSeats: new Set(),
  cartCount: 0,
  myBookings: [],
};

let currentUser = null;
const users = JSON.parse(localStorage.getItem('bms_users') || '{}');

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderMovies("");
  renderComingSoon();
  bindEvents();

  document.getElementById('signInBtn').addEventListener('click', openAuthModal);
  document.getElementById('modalClose').addEventListener('click', closeAuthModal);
  document.getElementById('authModal').addEventListener('click', e => {
    if (e.target === document.getElementById('authModal')) closeAuthModal();
  });
  document.getElementById('userAvatar').addEventListener('click', (e) => {
    document.getElementById('userAvatar').classList.toggle('open');
    e.stopPropagation();
  });
  document.addEventListener('click', () => {
    document.getElementById('userAvatar').classList.remove('open');
  });
  document.getElementById('signOutBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    logoutUser();
    document.getElementById('userAvatar').classList.remove('open');
  });

  const savedSession = localStorage.getItem('bms_session');
  if (savedSession) loginUser(JSON.parse(savedSession));
});

// ---------- RENDER MOVIES ----------
function renderMovies(filter = "") {
  const grid = document.getElementById("moviesGrid");
  const noResults = document.getElementById("noResults");
  const searchTerm = document.getElementById("searchTerm");

  const query = filter.toLowerCase().trim();
  const filtered = query
    ? MOVIES.filter(m =>
        m.title.toLowerCase().includes(query) ||
        m.genre.toLowerCase().includes(query) ||
        m.lang.toLowerCase().includes(query) ||
        m.rating.toLowerCase().includes(query)
      )
    : MOVIES;

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
    searchTerm.textContent = filter;
    grid.innerHTML = "";
    return;
  }
  noResults.classList.add("hidden");

  grid.innerHTML = filtered.map(m => `
    <div class="movie-card" data-id="${m.id}">
      <img class="movie-poster" src="${m.image}" alt="${m.title}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <div class="poster-placeholder" style="display:none">🎬</div>
      <div class="movie-info">
        <div class="movie-title">${m.title}</div>
        <div class="movie-meta">
          <span class="badge badge-genre">${m.genre}</span>
          <span class="badge badge-rating">⭐ ${m.imdb}</span>
          <span class="badge badge-lang">${m.lang}</span>
        </div>
        <div class="movie-duration">⏱ ${m.duration} &nbsp;·&nbsp; ${m.rating}</div>
        <button class="book-btn">Book Now · From ₹${m.basePrice}</button>
      </div>
    </div>
  `).join("");
}

function renderComingSoon() {
  const grid = document.getElementById("comingSoonGrid");
  grid.innerHTML = COMING_SOON.map(m => `
    <div class="movie-card">
      <img class="movie-poster" src="${m.image}" alt="${m.title}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <div class="poster-placeholder" style="display:none">🎬</div>
      <div class="movie-info">
        <div class="movie-title">${m.title}</div>
        <div class="movie-meta">
          <span class="badge badge-genre">${m.genre}</span>
          <span class="badge badge-lang">${m.lang}</span>
        </div>
        <div class="movie-duration">🗓 Releasing: ${m.releaseDate}</div>
        <button class="book-btn" style="opacity:0.5;cursor:not-allowed" disabled>Coming Soon</button>
      </div>
    </div>
  `).join("");
}

function renderMyBookings() {
  const list = document.getElementById("bookingsList");
  if (state.myBookings.length === 0) {
    list.innerHTML = `<div style="text-align:center;color:var(--muted);padding:3rem 0;font-size:1rem">No bookings yet. Book a movie to see it here!</div>`;
    return;
  }
  list.innerHTML = state.myBookings.map(b => `
    <div class="ticket" style="max-width:500px;margin:0 auto 1.5rem">
      <div class="ticket-movie">${b.movie}</div>
      <div class="ticket-row"><span>Booking ID</span><span>${b.id}</span></div>
      <div class="ticket-row"><span>Date</span><span>${b.date}</span></div>
      <div class="ticket-row"><span>Show</span><span>${b.time}</span></div>
      <div class="ticket-row"><span>Seats</span><span>${b.seats}</span></div>
      <div class="ticket-row"><span>Email</span><span>${b.email}</span></div>
      <div class="ticket-row"><span>Total Paid</span><span style="color:var(--gold)">${b.total}</span></div>
    </div>
  `).join("");
}

// ---------- RENDER SEATS ----------
const ROWS = ["A","B","C","D","E","F","G"];
const PREMIUM_ROWS = [5, 6]; // F, G

function renderSeats() {
  const map = document.getElementById("seatMap");
  map.innerHTML = "";
  ROWS.forEach((rowLabel, r) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "seat-row";
    rowDiv.innerHTML = `<span class="row-label">${rowLabel}</span>`;

    for (let c = 0; c < 10; c++) {
      if (c === 4) {
        const gap = document.createElement("div");
        gap.className = "seat-gap";
        rowDiv.appendChild(gap);
      }
      const seat = document.createElement("div");
      const key = `${r}-${c}`;
      const isPremium = PREMIUM_ROWS.includes(r);
      const isBooked = state.bookedSeats.has(key);
      const isSelected = state.selectedSeats.includes(key);

      seat.className = [
        "seat",
        isPremium ? "premium" : "",
        isBooked ? "booked" : isSelected ? "selected" : "available",
      ].join(" ").trim();

      seat.dataset.key = key;
      seat.dataset.row = r;
      seat.dataset.col = c;
      seat.dataset.premium = isPremium;
      seat.title = `${rowLabel}${c + 1}${isPremium ? " (Premium)" : ""}`;

      if (!isBooked) {
        seat.addEventListener("click", toggleSeat);
      }
      rowDiv.appendChild(seat);
    }
    map.appendChild(rowDiv);
  });
}

function toggleSeat(e) {
  const seat = e.currentTarget;
  const key = seat.dataset.key;
  const isPremium = seat.dataset.premium === "true";

  if (state.selectedSeats.includes(key)) {
    state.selectedSeats = state.selectedSeats.filter(s => s !== key);
    seat.classList.remove("selected");
    seat.classList.add("available");
  } else {
    if (state.selectedSeats.length >= 8) {
      alert("Maximum 8 seats per booking.");
      return;
    }
    state.selectedSeats.push(key);
    seat.classList.remove("available");
    seat.classList.add("selected");
  }
  updateSummary();
}

// ---------- SUMMARY ----------
function updateSummary() {
  const m = state.selectedMovie;
  const seats = state.selectedSeats;
  let total = 0;

  seats.forEach(key => {
    const [r] = key.split("-").map(Number);
    total += PREMIUM_ROWS.includes(r) ? m.premiumPrice : m.basePrice;
  });

  const seatLabels = seats.map(key => {
    const [r, c] = key.split("-").map(Number);
    return ROWS[r] + (c + 1);
  }).join(", ");

  document.getElementById("summarySeats").textContent = seats.length ? seatLabels : "None";
  document.getElementById("summaryTotal").textContent = `₹${total}`;
  document.getElementById("summaryTime").textContent = state.selectedTime || "--";
 document.getElementById("summaryDate").textContent = state.selectedDate
  ? formatSelectedDate(state.selectedDate)
  : getTodayDate();

  const btn = document.getElementById("proceedBtn");
  btn.disabled = seats.length === 0 || !state.selectedTime;
}

function getTodayDate() {
  return new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
function formatSelectedDate(isoDate) {
  if (!isoDate) return getTodayDate();
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// ---------- SHOW SECTIONS ----------
function showSection(name) {
  ["movies-section", "comingsoon-section", "seat-section", "payment-section", "confirm-section", "mybookings-section"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById(name + "-section").classList.remove("hidden");
  state.currentSection = name;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- DATE HELPERS ----------
function getBookingDates() {
  const dates = [];
  const today = new Date();
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : "",
      dayName: dayNames[d.getDay()],
      display: d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear(),
      value: d.toISOString().split("T")[0],
    });
  }
  return dates;
}

function renderDateDropdown() {
  const dates = getBookingDates();
  document.getElementById("dateOptions").innerHTML = dates.map(d => `
    <div class="date-option ${state.selectedDate === d.value ? 'active' : ''}"
         data-value="${d.value}" data-display="${d.display}" onclick="selectBookingDate(this)">
      <div class="date-option-left">
        <span class="date-option-day">${d.display}</span>
        ${d.label ? `<span class="date-option-label">${d.label}</span>` : ''}
      </div>
      <span class="date-option-dow">${d.dayName}</span>
      <span class="date-option-check">✓</span>
    </div>
  `).join("");
}

function selectBookingDate(el) {
  state.selectedDate = el.dataset.value;
  document.getElementById("dateDropdownLabel").textContent = el.dataset.display;
  document.getElementById("dateDropdownWrap").classList.remove("open");
  document.querySelectorAll(".date-option").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.value === state.selectedDate);
  });
  state.selectedSeats = [];
  state.bookedSeats = generateBookedSeats(state.selectedMovie.id, state.selectedTime + state.selectedDate);
  renderSeats();
  updateSummary();
}

function _dateDropdownToggle(e) {
  e.stopPropagation();
  document.getElementById("dateDropdownWrap").classList.toggle("open");
}
function _dateDropdownClose() {
  document.getElementById("dateDropdownWrap").classList.remove("open");
}

function initDateDropdown() {
  const btn  = document.getElementById("dateDropdownBtn");
  const dates = getBookingDates();
  state.selectedDate = dates[0].value;
  document.getElementById("dateDropdownLabel").textContent = dates[0].display + "  (Today)";
  renderDateDropdown();

  btn.removeEventListener("click", _dateDropdownToggle);
  document.removeEventListener("click", _dateDropdownClose);

  btn.addEventListener("click", _dateDropdownToggle);
  document.addEventListener("click", _dateDropdownClose);
}

// ---------- OPEN BOOKING ----------
function openBooking(movieId) {
  if (!currentUser) {
    openAuthModal();
    return;
  }
  const movie = MOVIES.find(m => m.id === movieId);
  state.selectedMovie = movie;
state.selectedSeats = [];
state.selectedTime = null;
state.selectedDate = null;   // ← ADD

document.getElementById("selectedMovieTitle").textContent = movie.title;
document.getElementById("summaryMovie").textContent = movie.title;

initDateDropdown();   // ← ADD

// Showtimes

  // Showtimes
  const stContainer = document.getElementById("showtimes");
  stContainer.innerHTML = movie.showtimes.map(t =>
    `<button class="time-btn" data-time="${t}">${t}</button>`
  ).join("");

  stContainer.querySelectorAll(".time-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      stContainer.querySelectorAll(".time-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedTime = btn.dataset.time;
      state.bookedSeats = generateBookedSeats(movie.id, state.selectedTime + (state.selectedDate || ""));
      state.selectedSeats = [];
      renderSeats();
      updateSummary();
    });
  });

  // Default first showtime
  const firstBtn = stContainer.querySelector(".time-btn");
  firstBtn.classList.add("active");
  state.selectedTime = movie.showtimes[0];
  state.bookedSeats = generateBookedSeats(movie.id, state.selectedTime + (state.selectedDate || ""));
  renderSeats();
  updateSummary();

  showSection("seat");
}

// ---------- OPEN PAYMENT ----------
function openPayment() {
  const m = state.selectedMovie;
  const seats = state.selectedSeats;
  let total = 0;
  seats.forEach(key => {
    const [r] = key.split("-").map(Number);
    total += PREMIUM_ROWS.includes(r) ? m.premiumPrice : m.basePrice;
  });
  const seatLabels = seats.map(key => {
    const [r, c] = key.split("-").map(Number);
    return ROWS[r] + (c + 1);
  }).join(", ");

  document.getElementById("payMovieName").textContent = m.title;
  document.getElementById("payDate").textContent = formatSelectedDate(state.selectedDate);
  document.getElementById("payTime").textContent = state.selectedTime;
  document.getElementById("paySeats").textContent = seatLabels;
  document.getElementById("payTotal").textContent = `₹${total}`;
  document.getElementById("payAmount").textContent = `₹${total}`;

  showSection("payment");
}
    function confirmPayment() {
  const activeTab = document.querySelector('.pay-tab.active').dataset.tab;

  if (activeTab === 'upi') {
    const name = document.getElementById("Name").value.trim();
    const upiId = document.getElementById("upiId").value.trim();
    const email = document.getElementById("emailUpi").value.trim();

    if (!name || !upiId || !email) {
      alert("Please fill in all UPI details.");
      return;
    }
    if (!upiId.includes("@")) {
      alert("Enter a valid UPI ID (e.g. name@upi).");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Enter a valid email address.");
      return;
    }
  } else {
    const name = document.getElementById("NameNB").value.trim();
    const bank = document.getElementById("bankSelect").value.trim();
    const email = document.getElementById("emailNB").value.trim();

    if (!name || !bank || !email) {
      alert("Please fill in all Net Banking details.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Enter a valid email address.");
      return;
    }
  }

  const email = activeTab === 'upi'
    ? document.getElementById("emailUpi").value.trim()
    : document.getElementById("emailNB").value.trim();

  const m = state.selectedMovie;
  const seats = state.selectedSeats;
  let total = 0;
  seats.forEach(key => {
    const [r] = key.split("-").map(Number);
    total += PREMIUM_ROWS.includes(r) ? m.premiumPrice : m.basePrice;
  });
  const seatLabels = seats.map(key => {
    const [r, c] = key.split("-").map(Number);
    return ROWS[r] + (c + 1);
  }).join(", ");

  const bookingId = "CV" + Date.now().toString().slice(-8).toUpperCase();

  document.getElementById("confirmMsg").textContent =
    `Tickets sent to ${email}. Your booking ID is ${bookingId}.`;

  document.getElementById("ticketCard").innerHTML = `
    <div class="ticket-movie">${m.title}</div>
   <div class="ticket-row"><span>Date</span><span>${formatSelectedDate(state.selectedDate)}</span></div>
    <div class="ticket-row"><span>Show</span><span>${state.selectedTime}</span></div>
    <div class="ticket-row"><span>Seats</span><span>${seatLabels}</span></div>
    <div class="ticket-row"><span>Total Paid</span><span>₹${total}</span></div>
    <div class="ticket-id">Booking ID: ${bookingId}</div>
  `;

  state.myBookings.push({
    id: bookingId,
    movie: m.title,
    date: formatSelectedDate(state.selectedDate),
    time: state.selectedTime,
    seats: seatLabels,
    total: `₹${total}`,
    email: email,
  });
  state.cartCount += seats.length;
  document.getElementById("cartCount").textContent = state.cartCount;

  showSection("confirm");
}

// ---------- EVENTS ----------
function bindEvents() {
  // Movie cards
  document.getElementById("moviesGrid").addEventListener("click", e => {
    const card = e.target.closest(".movie-card");
    if (card) openBooking(parseInt(card.dataset.id));
  });

  // Back buttons
  document.getElementById("backToMovies").addEventListener("click", () => showSection("movies"));
  document.getElementById("backToSeats").addEventListener("click", () => showSection("seat"));

  // Nav links
  document.querySelectorAll('nav a[data-section]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      if (link.dataset.section === 'mybookings') renderMyBookings();
      showSection(link.dataset.section);
    });
  });

  // Proceed to payment
  document.getElementById("proceedBtn").addEventListener("click", openPayment);

  // Pay button
  document.getElementById("payBtn").addEventListener("click", confirmPayment);

  // New booking
  document.getElementById("newBookingBtn").addEventListener("click", () => {
    state.selectedMovie = null;
    state.selectedSeats = [];
    state.selectedTime = null;
    document.getElementById("searchInput").value = "";
    document.getElementById("clearSearch").style.display = "none";
    renderMovies("");
    showSection("movies");
  });

  // Search
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");
  searchInput.addEventListener("input", e => {
    const val = e.target.value;
    clearBtn.style.display = val ? "block" : "none";
    renderMovies(val);
  });
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    renderMovies("");
    searchInput.focus();
  });
}

function switchTab(tab) {
  document.querySelectorAll('.pay-tab').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tab));
  document.querySelectorAll('.tab-content').forEach(el =>
    el.classList.add('hidden'));
  document.getElementById('tab-' + tab).classList.remove('hidden');
}

function selectUpiApp(btn) {
  document.querySelectorAll('.upi-app-btn').forEach(b =>
    b.classList.remove('selected'));
  btn.classList.add('selected');
}

// ---------- AUTH ----------

function openAuthModal() {
  switchAuthTab('signin');
  document.getElementById('authModal').classList.remove('hidden');
}
function closeAuthModal() {
  document.getElementById('authModal').classList.add('hidden');
}
function switchAuthTab(tab) {
  document.getElementById('formSignIn').classList.toggle('hidden', tab !== 'signin');
  document.getElementById('formSignUp').classList.toggle('hidden', tab !== 'signup');
  document.getElementById('tabSignIn').classList.toggle('active', tab === 'signin');
  document.getElementById('tabSignUp').classList.toggle('active', tab === 'signup');
  document.getElementById('siError').classList.add('hidden');
  document.getElementById('suError').classList.add('hidden');
}
function handleSignIn() {
  const username = document.getElementById('siUsername').value.trim();
  const pass     = document.getElementById('siPassword').value;
  const err      = document.getElementById('siError');
  if (!username || !pass) { showAuthError(err, 'Please fill in all fields.'); return; }
  const user = Object.values(users).find(u => u.username === username);
  if (!user) { showAuthError(err, 'Username not found. Please sign up.'); return; }
  if (user.password !== pass) { showAuthError(err, 'Incorrect password.'); return; }
  loginUser(user);
}
function handleSignUp() {
  const name     = document.getElementById('suName').value.trim();
  const username = document.getElementById('suUsername').value.trim();
  const email    = document.getElementById('suEmail').value.trim();
  const pass     = document.getElementById('suPassword').value;
  const err      = document.getElementById('suError');
  if (!name || !username || !email || !pass) { showAuthError(err, 'Please fill in all fields.'); return; }
  if (!/\S+@\S+\.\S+/.test(email)) { showAuthError(err, 'Enter a valid email address.'); return; }
  if (pass.length < 6) { showAuthError(err, 'Password must be at least 6 characters.'); return; }
  if (users[email]) { showAuthError(err, 'Account already exists. Please sign in.'); return; }
  const usernameExists = Object.values(users).find(u => u.username === username);
  if (usernameExists) { showAuthError(err, 'Username already taken. Choose another.'); return; }
  users[email] = { name, username, email, password: pass };
  localStorage.setItem('bms_users', JSON.stringify(users));
  loginUser(users[email]);
}
function loginUser(user) {
  currentUser = user;
  localStorage.setItem('bms_session', JSON.stringify(user));
  document.getElementById('signInBtn').classList.add('hidden');
  document.getElementById('userAvatar').classList.remove('hidden');
  document.getElementById('userInitial').textContent = user.name.charAt(0).toUpperCase();
  document.getElementById('userDropdownName').textContent = user.name;
  document.getElementById('userDropdownEmail').textContent = user.email;
  closeAuthModal();
}
function logoutUser() {
  currentUser = null;
  localStorage.removeItem('bms_session');
  document.getElementById('signInBtn').classList.remove('hidden');
  document.getElementById('userAvatar').classList.add('hidden');
}
function showAuthError(el, msg) {
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ---------- CITY SELECTOR ----------
const CITIES = [
  { name: "Mumbai",    img: "https://in.bmscdn.com/m6/images/common-modules/city-select/mumbai.svg" },
  { name: "Delhi-NCR", img: "https://in.bmscdn.com/m6/images/common-modules/city-select/ncr.svg" },
  { name: "Bengaluru", img: "https://in.bmscdn.com/m6/images/common-modules/city-select/bangalore.svg" },
  { name: "Hyderabad", img: "https://in.bmscdn.com/m6/images/common-modules/city-select/hyderabad.svg" },
  { name: "Chandigarh",img: "https://in.bmscdn.com/m6/images/common-modules/city-select/chandigarh.svg" },
  { name: "Ahmedabad", img: "https://in.bmscdn.com/m6/images/common-modules/city-select/ahmedabad.svg" },
  { name: "Pune",      img: "https://in.bmscdn.com/m6/images/common-modules/city-select/pune.svg" },
  { name: "Chennai",   img: "https://in.bmscdn.com/m6/images/common-modules/city-select/chennai.svg" },
  { name: "Kolkata",   img: "https://in.bmscdn.com/m6/images/common-modules/city-select/kolkata.svg" },
  { name: "Kochi",     img: "https://in.bmscdn.com/m6/images/common-modules/city-select/kochi.svg" },
];

function renderCityGrid(filter = "") {
  const grid = document.getElementById("cityGrid");
  const filtered = filter
    ? CITIES.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
    : CITIES;
  grid.innerHTML = filtered.map(c => `
    <div class="city-item ${c.name === selectedCity ? 'active' : ''}" onclick="selectCity('${c.name}')">
      <img src="${c.img}" alt="${c.name}" onerror="this.style.display='none'"/>
      ${c.name}
    </div>
  `).join("");
}

let selectedCity = localStorage.getItem('bms_city') || "";

function selectCity(name) {
  selectedCity = name;
  localStorage.setItem('bms_city', name);
  document.getElementById("citySelected").textContent = name;
  document.getElementById("citySelectorWrap").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  if (selectedCity) document.getElementById("citySelected").textContent = selectedCity;
  renderCityGrid();

  document.getElementById("citySelectorWrap").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("citySelectorWrap").classList.toggle("open");
  });

  document.getElementById("citySearchInput").addEventListener("input", (e) => {
    e.stopPropagation();
    renderCityGrid(e.target.value);
  });

  document.getElementById("citySearchInput").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    document.getElementById("citySelectorWrap").classList.remove("open");
  });
});