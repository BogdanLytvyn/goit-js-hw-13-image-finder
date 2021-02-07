// const key = "16983876-2e0d7c5bd7f8d708e3eb2a9d0";
// const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`;

export default {
  key: "16983876-2e0d7c5bd7f8d708e3eb2a9d0",
  BASE_URL: `https://pixabay.com/api/?image_type=photo&orientation=horizontal`,

  page: 1,
  searchQuery: "",

  async fetchImage() {
    try {
      const url = `${this.BASE_URL}&q=${this.query}&page=${
        this.page
      }&per_page=${12}&key=${this.key}`;
      const response = await fetch(url);
      const images = await response.json();
      this.incremPage();
      return images;
    } catch (error) {
      (error) => error;
    }
  },
  resetPage() {
    this.page = 1;
  },

  incremPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
