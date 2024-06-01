<template>
  <div classs="d-flex w-100">
    <v-data-table
      v-model="selected"
      class="listin-table"
      :headers="headers"
      :items="items"
      show-select
      :items-per-page="8"
      hide-default-footer
    >
      <!-- <template v-slot:header="{ props: { headers } }">
        <thead>
          <tr>
            <th v-for="h in headers" :key="h.text">
              <div class="mx-auto">
                <p>{{ h.text }}</p>
              </div>
            </th>
          </tr>
        </thead>
      </template> -->

      <!-- <template v-slot:item.exclusive="{ item }">
        <div class="checkBox">
          <v-checkbox v-model="item.exclusive" hide-details="true" />
        </div>
      </template> -->

      <template v-slot:item.Visability="{ item }">
        <div class="d-flex">
          <p class="green--tag px-2 py-1 text-subtitle-1">
            {{ item.Visability }}
          </p>
        </div>
      </template>

      <template v-slot:item.Price="{ item }">
        <div class="d-flex">
          <p class="price text-subtitle-1">
            {{ item.Price }}
          </p>
        </div>
      </template>

      <template v-slot:item.Qty="{ item }">
        <div class="d-flex">
          <p class="QTY text-subtitle-1" :class="item.Qty <= 10 ? 'low' : ''">
            {{ item.Qty }}
          </p>
        </div>
      </template>

      <template v-slot:item.Type="{ item }">
        <div class="d-flex">
          <p class="type text-subtitle-1">
            {{ item.Type }}
          </p>
        </div>
      </template>

      <template v-slot:item.Category="{ item }">
        <div class="d-flex">
          <p class="category text-subtitle-1">
            {{ item.Category }}
          </p>
        </div>
      </template>

      <template v-slot:item.Product="{ item }">
        <div class="d-flex">
          <img src="@/assets/svgs/product.svg" alt="product" />
          <p class="product text-subtitle-1 ml-2">
            {{ item.Product }}
          </p>
        </div>
      </template>

      <template v-slot:item.SKU="{ item }">
        <div class="d-flex">
          <p class="SKU text-subtitle-1">
            {{ item.SKU }}
          </p>
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <div class="d-flex">
          <v-icon class="me-3 cursor-pointer" size="small" color="#AFAACB">
            mdi-pencil
          </v-icon>
          <v-icon class="cursor-pointer" size="small" color="#AFAACB">
            mdi-trash-can-outline
          </v-icon>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
const items = [
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Vitamins & Minerals',
    Type: 'Variables',
    Qty: '185',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Brain Health',
    Type: 'Simple',
    Qty: '10',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Heart & Metabolism',
    Type: 'Variables',
    Qty: '110',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Vitamins & Minerals',
    Type: 'Bundle',
    Qty: '5',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Gut Health',
    Type: 'Variables',
    Qty: '144',
    Price: 'KD 20',
    Visability: 'Published',
  },

  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Vitamins & Minerals',
    Type: 'Simple',
    Qty: '6',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Heart & Metabolism',
    Type: 'Variables',
    Qty: '210',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Gut Health',
    Type: 'Bundle',
    Qty: '9',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '199',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Variables',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Bundle',
    Qty: '400',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Variables',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  {
    SKU: '#76459849',
    Product: 'Lorem ipsum dolor sit ame consectetur.',
    Category: 'Herbivore',
    Type: 'Simple',
    Qty: '250',
    Price: 'KD 20',
    Visability: 'Published',
  },
  // ... more items
];

const headers = [
  {
    align: 'start',
    key: 'exclusive',
    sortable: false,
    removable: false,
    align: 'center',
  },
  { title: 'SKU', key: 'SKU', align: 'left', sortable: false },
  {
    title: 'Product',
    key: 'Product',
    align: 'left',
    sortable: true,
    width: 250,
  },
  { title: 'Category', key: 'Category', ralign: 'center', sortable: true },
  { title: 'Type', key: 'Type', align: 'left', sortable: false },
  { title: 'Qty', key: 'Qty', align: 'left', sortable: false },
  { title: 'Price', key: 'Price', align: 'left', sortable: true },
  { title: 'Visability', key: 'Visability', align: 'left', sortable: true },
  { key: 'actions', align: 'center', sortable: false },
];
</script>

<style>
.green--tag {
  color: #27ae60;
  background-color: rgba(39, 174, 96, 0.1);
  border-radius: 8px;
}
.price {
  color: #21094a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
.QTY {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
.QTY.low {
  color: #eb5757;
}

.type {
  color: #7066a2;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.category {
  color: #21094a;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.product {
  color: var(--Black, #21094a);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.SKU {
  color: #21094a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.checkBox {
  border-right: 1px #afaacb solid;
}

.listin-table {
  border-radius: 8px;
}

.listin-table thead tr:first-child {
  background-color: #9089b233;
  color: #21094a;
}

.listin-table tr > td:first-child {
  border-right: 1px solid #afaacb;
}
</style>
