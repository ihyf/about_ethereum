pragma solidity ^0.4.4;
contract X {
    uint [5] A = [1,2,3,4,5];
    uint [] A1 = [1,2,3];
    
    function num() constant public returns (uint) {
        uint num = 0;
        for(uint i=0; i < A.length; i++) {
            num = num + A[i];
        }
        return num;
    }
    
    function setA1length (uint l) public {
        A1.length = l;
    }
    
    function getA1length () constant returns (uint) {
        return A1.length;
    }
    
    function pushA1 (uint x) public {
        A1.push(x);
    }
    
    function showA1 () public returns (uint []){
        return A1;
    }
    
    struct Student {
        uint age;
        uint stuId;
        string name;
    }
    
    struct Class {
        string clsName;
        Student[] students;
        mapping(string=>Student)index;
    }
    
    Student _huang = Student(25,1,"huang");
    Student _zhang = Student({age:18,stuId:2,name:"zhang"});
    
}