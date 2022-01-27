<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-height="600px" max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn height="200px" width="200px" color="amber" dark v-bind="attrs" v-on="on">
          something to add?
        </v-btn>
      </template>
      <v-card  color="amber darken-2">
        <v-card-title color="yellow lighten-5">
          <span  class="font-main text-h5">add new product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="title"
                  color="yellow lighten-5"
                  label="title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="price"
                  color="yellow lighten-5"
                  label="price"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12"> </v-col>
              <v-col cols="12"> </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="catagory"
                  color="yellow lighten-5"
                  :items="[1, 2, 3, 4]"
                  label="catagory"
                  required
                ></v-select>
                <v-checkbox
                  v-model="inStock"
                  label="in stock"
                  color="yellow lighten-5"
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
          <v-btn color="yellow lighten-5" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn :disabled="loading" color="yellow lighten-5" text @click="addProduct">
             {{ loading ? 'Uploading ...' : 'save' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'LargeModal',
  data() {
    return {
      dialog: false,
      title: null,
      price: null,
      image: null,
      inStock: null,
      catagory: null,
      feedback: null,
      loading: false,
      imagePath: '',
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
            catagory_id: this.catagory,
            image_url: image,
          },
        ])
        if (error) throw error
        alert('product added')
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
