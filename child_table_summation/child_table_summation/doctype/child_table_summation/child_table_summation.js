// Copyright (c) 2024, Shashank Shirke and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Child Table Summation", {
// 	refresh(frm) {

// 	},
// });
//

// Simple summation of two fields

frappe.ui.form.on("Child Table Summation", "x_field", function(frm) {
  frm.set_value("sum", flt(frm.doc.x_field) + flt(frm.doc.y_field));
});

frappe.ui.form.on("Child Table Summation", "y_field", function(frm) {
  frm.set_value("sum", flt(frm.doc.x_field) + flt(frm.doc.y_field));
});



// Summation of single child table

frappe.ui.form.on("Child Table A", "cost", function (frm, cdt, cdn) {
    var total = 0;
    $.each(frm.doc.child_table_a_link_field || [], function (i, d) {
        total += flt(d.cost);
    });
    frm.set_value("sum_of_child_table_a", total);
});



// Summation of multiple child tables

frappe.ui.form.on("Child Table B", "charge", function (frm, cdt, cdn) {
    var total = 0;
    $.each(frm.doc.child_table_b_link_field || [], function (i, d) {
        total += flt(d.charge);
    });
    frm.set_value("sum_of_child_table_b", total);
});

frappe.ui.form.on("Child Table C", "price", function (frm, cdt, cdn) {
    var total = 0;
    $.each(frm.doc.child_table_c_link_field || [], function (i, d) {
        total += flt(d.price);
    });
    frm.set_value("sum_of_child_table_c", total);
});

frappe.ui.form.on("Child Table Summation", "sum_of_child_table_b", function(frm) {
  frm.set_value("sum_of_b_c", flt(frm.doc.sum_of_child_table_b) + flt(frm.doc.sum_of_child_table_c));
});

frappe.ui.form.on("Child Table Summation", "sum_of_child_table_c", function(frm) {
  frm.set_value("sum_of_b_c", flt(frm.doc.sum_of_child_table_b) + flt(frm.doc.sum_of_child_table_c));
});

