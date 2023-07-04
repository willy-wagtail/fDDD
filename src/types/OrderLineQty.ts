type OrderLineQty = number;

type CreateOrderLineQty = (qty: number) => Option<OrderLineQty>;

let createOrderLineQty: CreateOrderLineQty = (qty) =>
  qty > 0 && qty < 99 ? qty : null;
