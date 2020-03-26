<template>
  <div id="app">
    <img src="@/assets/imgs/camera.jpg" alt="Smile for the camera" height="60" width="80">
    <h1><i>PicPager</i></h1>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <input type="file"  v-on:submit="addFiles" name="post__img" class="float-left mb-3">
        </div>
        <div class="col-lg-12">
          <textarea placeholder="Descrição" name="post__desc"
          class="form-control" v-model="post_desc"></textarea>
          <button v-on:click.prevent="addPost" type="submit" class="mt-3 float-left btn btn-primary">Enviar</button>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 list-group">
            <h4 class="mt-3 text-left">Comentários</h4>
            <div class="form-todo form-group">
            <p>
              <input type="text" class="form-control" name="comment__author" placeholder="Autor" v-model="comment_author"/>
            </p>
            <p>
              <textarea placeholder="Mensagem" name="comment__msg"
              class="form-control" v-model="comment_msg" ></textarea>
            </p>
            <button type="submit" v-on:click="addComment" class="float-left btn btn-outline-primary">Adicionar Comentário</button>
          </div>
        </div>
      </div>
        <div class="list-group-item text-left" v-for="(comment, idx) in comments" v-bind:key="(comment, idx)">
          <span class="comment__author">Autor: <strong>{{ comment.author }}</strong></span>
            <div></div>
          <span class="comment__message">Mensagem: <strong>{{ comment.message }}</strong></span>
          <div>
            <a href="#" v-on:click.prevent="removeComment(idx)" title="Excluir">Excluir</a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      posts: [],
      post_img: '',
      post_desc: '',
      comment_author: '',
      comment_msg: '' 
    }
  },
  methods: {
    addPost() {
      let file = this.addFiles;
      this.posts.push({
        img: e.target.files[0],
        description: this.post_desc
      });

      this.post_desc = '';
      console.log(this.posts);
    },
    addComment() {
      this.comments.push({
        author: this.comment_author,
        message: this.comment_msg
      });

      this.comment_author = '';
      this.comment_msg = '';
    },
    addFiles(e) {
      var file;
      if (typeof(e) != 'undefined')
        file = e.target.files[0];
        
      
    },
    removePost(id) {
      this.posts.splice(id, 1);
    },
    removeComment(id) {
      this.comments.splice(id, 1);
    }
  }
}
</script>

<style>
#app {  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
