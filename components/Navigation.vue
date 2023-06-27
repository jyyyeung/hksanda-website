<template>
  <section class="z-10">
    <header
      class="z-30 grid h-auto grid-cols-3 gap-0 md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-1 lg:gap-3"
    >
      <NuxtLink to="/" class="nav-link col-span-1 col-start-1 row-start-1">
        <nuxt-img
          width="72"
          alt="logo"
          class="mx-2 my-1"
          src="/images/logo.png"
          sizes="sm:48 md:52 lg:71"
        />
      </NuxtLink>
      <nav
        class="col-span-6 row-start-2 lg:col-span-9 lg:row-start-1 lg:my-1 lg:h-auto lg:self-center"
      >
        <ul
          class="flex flex-wrap lg:min-h-[3em] lg:flex-row lg:items-center lg:gap-3"
        >
          <li
            class="mx-2 min-h-[48px] w-fit md:min-h-min"
            v-for="route in (routes as Route[])"
          >
            <NuxtLink
              :href="route.to"
              :class="`nav-link group block px-2 text-center text-text-color hover:bg-transparent hover:bg-brush hover:bg-cover hover:bg-center hover:text-white  ${
                route.to == currentRoute.path
                  ? 'bg-transparent bg-brush bg-cover bg-center text-white'
                  : ''
              } `"
            >
              {{ route.label }}
            </NuxtLink>
            <div
              class="z-30 hidden lg:absolute lg:rounded-sm lg:bg-gradient-to-t lg:from-background lg:from-50% lg:to-transparent lg:shadow lg:group-hover:block"
              v-if="route.items != null"
            >
              <ul v-for="item in route.items">
                <li>
                  <NuxtLink
                    class="nav-link block px-0 py-1 hover:bg-transparent hover:bg-brush hover:bg-cover hover:bg-center hover:text-white lg:px-4 lg:py-1"
                    :href="item.to"
                  >
                    {{ item.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div
        class="col-span-2 col-start-2 m-auto ml-auto bg-white bg-opacity-75 md:col-span-4 md:col-start-3 lg:col-span-2 lg:col-start-auto"
      >
        <a
          href="https://api.whatsapp.com/send?phone=85297322082&text="
          target="_blank"
          class="no-highlight"
        >
          <div class="grid grid-cols-2 items-center">
            <Icon
              name="logos:whatsapp-icon"
              class="justify-self-end text-4xl lg:text-5xl"
            />
            <p>WhatsApp 傅教練 97322082</p>
          </div>
        </a>
      </div>
      <!--<div class="lg:col-end-12 lg:col-span-1 self-center col-end-6">
                <Localize />
            </div>-->
    </header>
  </section>
</template>

<script setup lang="ts">
const GET_ALL_ROUTES = groq`*[ _type == "page" ]{'to': '/' + route, 'label': title, orderRank} | order(orderRank)`;

const currentRoute = useRoute();

interface Route {
  to: String;
  label: String;
  items: Route[];
}

const { data: routes } = useSanityQuery(GET_ALL_ROUTES);
</script>
