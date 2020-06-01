"use strict";
// 特殊类型
var Project;
(function (Project) {
    Project[Project["Math"] = 0] = "Math";
    Project[Project["English"] = 1] = "English";
    Project[Project["Phsicla"] = 2] = "Phsicla";
})(Project || (Project = {}));
;
var Project2;
(function (Project2) {
    Project2[Project2["Math"] = 1] = "Math";
    Project2[Project2["English"] = 2] = "English";
    Project2[Project2["Phsicla"] = 3] = "Phsicla";
})(Project2 || (Project2 = {}));
;
var sub = Project.Math;
var subject = Project2[1];
