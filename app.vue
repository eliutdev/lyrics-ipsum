<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader },
  data() {
    return {
      artist: "",
      lyrics: [],
      isLoading: false,
    };
  },
  methods: {
    async getLyrics() {
      try {
        this.isLoading = true;
        this.lyrics = await $fetch(`/api/lyrics?artist=${this.artist}`);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <main class="home">
    <h1>Lyrics Ipsum</h1>
    <p>The Lorem Ipsum from your lyrics</p>
    <form @submit.prevent="getLyrics">
      <input
        type="text"
        placeholder="Search artist..."
        v-model="artist"
        required
      />
      <input
        type="submit"
        :value="isLoading ? 'Searching...' : 'Get lyrics!'"
        :disabled="isLoading"
      />
    </form>
    <template v-if="lyrics.length">
      <p v-for="(lyric, index) in lyrics" :key="index">
        <span v-if="index === 0">{{ lyric }}</span>
        <span v-else>{{ lyric }}</span>
      </p>
      <p>
        <small
          >Created by
          <a href="https://twitter.com/eliut505" target="_blank"
            >Eliut González</a
          ></small
        >
      </p>
      <p>
        <small
          >Lyrics submitted by
          <a href="https://www.musixmatch.com" target="_blank"
            >Musixmatch</a
          ></small
        >
      </p>
    </template>
    <ContentLoader
      v-if="isLoading"
      :width="400"
      :height="160"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  margin: 0;
}
.home {
  max-width: 1024px;
  height: 100vh;
  margin: auto;
  padding: 1rem;
}
.lyrics {
  text-align: justify;
}
form {
  display: flex;
  flex-direction: row;
  align-items: center;
}
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;
}
input[type="submit"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
input[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
small {
  font-size: 0.8rem;
  color: #999;
}
small a {
  color: #333;
  font-weight: 400;
  text-decoration: none;
}
</style>
