<template>
  <div class="user-notifications">
    <!-- breadcrumb -->
    <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/petlover">Home</a></li>
            <li class="is-active">
              <a href="#" aria-current="page">Notificações</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- breadcrumb -->

    <div class="columns">
      <div class="column is-12">
        <h1>Minhas notificações</h1>
      </div>
    </div>

    <div class="box">
      <article
        class="media"
        v-for="notification in notifications"
        :key="notification.id"
      >
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="../../assets/user-logo.png" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong> {{ notification.user }}</strong>
              <small> {{ notification.userName }} | </small>
              <small class="badge-time">
                há {{ notification.lastTime }} min atrás</small
              >
              <br />
              {{ notification.message }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i> Responder
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNotifications",
  data() {
    return {
      notifications: [
        {
          id: 1,
          user: "James Santana",
          userName: "@jamessantana",
          lastTime: 10,
          message:
            "Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. lero lero...",
        },
        {
          id: 2,
          user: "Sara Winters",
          userName: "@sarawinters",
          lastTime: 100,
          message:
            "Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. lero lero...",
        },
        {
          id: 3,
          user: "Jessica Obama",
          userName: "@jessicaobama",
          lastTime: 30,
          message:
            "Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. lero lero...",
        },
        {
          id: 4,
          user: "Clarise Lispector ",
          userName: "@claricelispector",
          lastTime: 89,
          message:
            "Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. lero lero...",
        },
      ],
    };
  },
};
</script>

<style>
a {
    color: #ff6b6b;
    cursor: pointer;
    text-decoration: none;
}

a:hover {
    color: #E63946;
    cursor: pointer;
    text-decoration: none;
}

.user-notifications {
  padding: 10px;
  width: 85vw;
}

.badge-time {
  padding: 5px;
  background: #ff6b6b;
  color: #fff;
  border-radius: 8px;
}
</style>
