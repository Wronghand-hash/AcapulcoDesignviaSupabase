<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-height="600px" max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn
          height="100px"
          width="280px"
          color="pink darken-1"
          dark
          v-bind="attrs"
          class="my-7"
          v-on="on"
        >
          <span class="font-mainFont font-semibold text-mainBlue text-4xl">
            Add a Product
          </span>
        </v-btn>
      </template>
      <v-card color="">
        <v-card-title color="yellow lighten-2">
          <span
            class="font-mainFont font-bold capitalize text-white text-3xl rounded shadow-2xl bg-pink-500 p-4"
            >add new product</span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="title"
                  color="indigo"
                  label="title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="price"
                  color="indigo"
                  label="price"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="description"
                  color="indigo"
                  label="description"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="category"
                  color="indigo"
                  :items="[
                    'Lighters',
                    'Collections',
                    'Matchboxes',
                    'Shirts',
                    'Shorts',
                    'Hoodies',
                  ]"
                  label="category"
                  required
                ></v-select>
                <v-checkbox
                  v-model="inStock"
                  label="in stock"
                  color="indigo"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="6">
                <input
                  id="single"
                  type="file"
                  accept="image/*"
                  @change="uploadImage"
                />
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="text-2xl font-mainFont text-white"
            color="pink"
            light
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn color="pink" light :disabled="loading" @click="addProduct">
            {{ loading ? 'Uploading ...' : 'save' }}
          </v-btn>
        </v-card-actions>
        <v-alert
          v-show="productAdded"
          transition="fade-transition"
          border="bottom"
          color="green"
          type="success"
          class="text-4xl text-mainBlue items-center absolute justify-center"
        >
          Product Added Cuz
        </v-alert>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'LargeModal',
  data() {
    return {
      productAdded: false,
      dialog: false,
      title: null,
      price: null,
      image: null,
      inStock: null,
      category: null,
      feedback: null,
      loading: false,
      imagePath: '',
      descrition: '',
    }
  },
  mounted() {},
  methods: {
    async uploadImage(event) {
      this.image = event.target.files[0]
      // eslint-disable-next-line no-console
      console.log(this.image)
      try {
        this.loading = true
        if (!this.image || this.image.length === 0) {
          throw new Error('You must select an image to upload.')
        }
        // eslint-disable-next-line no-console
        console.log(this.image)
        const file = this.image
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`
        this.imagePath = filePath

        const { error: uploadError } = await this.$supabase.storage
          .from('product-images')
          .upload(filePath, file)

        if (uploadError) throw uploadError
      } catch (error) {
        alert(error.message)
      } finally {
        // eslint-disable-next-line no-console
        console.log(this.imagePath)
        this.loading = false
        // some niggas
      }
    },

    async addProduct() {
      try {
        const image = await this.imagePath
        const { error } = await this.$supabase.from('products').insert([
          {
            title: this.title,
            price: this.price,
            inStock: this.inStock,
            category: this.category,
            image_url: image,
            description: this.description,
          },
        ])
        if (error) throw error
        this.productAdded = true
        setTimeout(() => {
          this.productAdded = false
        }, 3000)
        setTimeout(() => {
          this.showModal = false
        }, 2000)
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        this.title = null
        this.price = null
        this.inStock = null
        this.imagePath = ''
        this.dialog = false
        this.$store.dispatch('getProducts')
      }
    },

    toggleModal() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<style>
#modal {
  font-family: 'Yanone Kaffeesatz';
  font-size: 20px;
}

.topBar {
  background-color: #041f60;
}

.background {
  background-color: #219ebc;
}
</style>
