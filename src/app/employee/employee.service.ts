import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { EmployeeModel } from "./employee.model";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    constructor(private fireStore: AngularFirestore) {

    }
    getAll() {
        return this.fireStore.collection('employee').snapshotChanges();
    }
    getById(deptId: string) {
        console.log(deptId);
        return this.fireStore.doc<EmployeeModel>('employee/' + deptId).valueChanges();
    }
    create(employeeModel: EmployeeModel) {
        return this.fireStore.collection('employee').add({ ...employeeModel });
    }
    update(deptId: string, employeeModel: EmployeeModel) {
        return this.fireStore.doc('employee/' + deptId).update({ ...employeeModel });
    }
    delete(deptId: string) {
        return this.fireStore.doc('employee/' + deptId).delete();
    }
}
