var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_State_Aid_Routes_in_Minnesota_1 = new ol.format.GeoJSON();
var features_State_Aid_Routes_in_Minnesota_1 = format_State_Aid_Routes_in_Minnesota_1.readFeatures(json_State_Aid_Routes_in_Minnesota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_Aid_Routes_in_Minnesota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_Aid_Routes_in_Minnesota_1.addFeatures(features_State_Aid_Routes_in_Minnesota_1);
var lyr_State_Aid_Routes_in_Minnesota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_Aid_Routes_in_Minnesota_1, 
                style: style_State_Aid_Routes_in_Minnesota_1,
                popuplayertitle: "State_Aid_Routes_in_Minnesota",
                interactive: false,
                title: '<img src="styles/legend/State_Aid_Routes_in_Minnesota_1.png" /> State_Aid_Routes_in_Minnesota'
            });
var format_Trunk_Highways_in_Minnesota_2 = new ol.format.GeoJSON();
var features_Trunk_Highways_in_Minnesota_2 = format_Trunk_Highways_in_Minnesota_2.readFeatures(json_Trunk_Highways_in_Minnesota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trunk_Highways_in_Minnesota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trunk_Highways_in_Minnesota_2.addFeatures(features_Trunk_Highways_in_Minnesota_2);
var lyr_Trunk_Highways_in_Minnesota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trunk_Highways_in_Minnesota_2, 
                style: style_Trunk_Highways_in_Minnesota_2,
                popuplayertitle: "Trunk_Highways_in_Minnesota",
                interactive: false,
                title: '<img src="styles/legend/Trunk_Highways_in_Minnesota_2.png" /> Trunk_Highways_in_Minnesota'
            });
var format_Buffered2_3 = new ol.format.GeoJSON();
var features_Buffered2_3 = format_Buffered2_3.readFeatures(json_Buffered2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered2_3.addFeatures(features_Buffered2_3);
var lyr_Buffered2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered2_3, 
                style: style_Buffered2_3,
                popuplayertitle: "Buffered2",
                interactive: false,
                title: '<img src="styles/legend/Buffered2_3.png" /> Buffered2'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: false,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_antenna_structure_registration_mn_5 = new ol.format.GeoJSON();
var features_antenna_structure_registration_mn_5 = format_antenna_structure_registration_mn_5.readFeatures(json_antenna_structure_registration_mn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_antenna_structure_registration_mn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_antenna_structure_registration_mn_5.addFeatures(features_antenna_structure_registration_mn_5);
var lyr_antenna_structure_registration_mn_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_antenna_structure_registration_mn_5, 
                style: style_antenna_structure_registration_mn_5,
                popuplayertitle: "antenna_structure_registration_mn",
                interactive: false,
                title: '<img src="styles/legend/antenna_structure_registration_mn_5.png" /> antenna_structure_registration_mn'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_State_Aid_Routes_in_Minnesota_1.setVisible(true);lyr_Trunk_Highways_in_Minnesota_2.setVisible(true);lyr_Buffered2_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_antenna_structure_registration_mn_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_State_Aid_Routes_in_Minnesota_1,lyr_Trunk_Highways_in_Minnesota_2,lyr_Buffered2_3,lyr_Buffered_4,lyr_antenna_structure_registration_mn_5];
lyr_State_Aid_Routes_in_Minnesota_1.set('fieldAliases', {'ROUTE_ID': 'ROUTE_ID', 'ROUTE_NAME': 'ROUTE_NAME', 'ROUTE_LABE': 'ROUTE_LABE', 'ROUTE_SIGN': 'ROUTE_SIGN', 'ROUTE_SYST': 'ROUTE_SYST', 'GNIS_FEATU': 'GNIS_FEATU', 'ROUTE_NUMB': 'ROUTE_NUMB', 'ROUTE_SUFF': 'ROUTE_SUFF', 'TRAFFIC_DI': 'TRAFFIC_DI', 'ROUTE_SI_1': 'ROUTE_SI_1', 'OWNERSHIP': 'OWNERSHIP', 'ROUTE_QUAL': 'ROUTE_QUAL', 'ROUTE_CARD': 'ROUTE_CARD', 'FROM_MEASU': 'FROM_MEASU', 'TO_MEASURE': 'TO_MEASURE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Trunk_Highways_in_Minnesota_2.set('fieldAliases', {'ROUTE_ID': 'ROUTE_ID', 'ROUTE_NAME': 'ROUTE_NAME', 'ROUTE_LABE': 'ROUTE_LABE', 'ROUTE_SIGN': 'ROUTE_SIGN', 'ROUTE_SYST': 'ROUTE_SYST', 'GNIS_FEATU': 'GNIS_FEATU', 'ROUTE_NUMB': 'ROUTE_NUMB', 'ROUTE_SUFF': 'ROUTE_SUFF', 'TRAFFIC_DI': 'TRAFFIC_DI', 'ROUTE_SI_1': 'ROUTE_SI_1', 'OWNERSHIP': 'OWNERSHIP', 'ROUTE_QUAL': 'ROUTE_QUAL', 'ROUTE_CARD': 'ROUTE_CARD', 'FROM_MEASU': 'FROM_MEASU', 'TO_MEASURE': 'TO_MEASURE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Buffered2_3.set('fieldAliases', {'fid': 'fid', 'RecType': 'RecType', 'ContInd': 'ContInd', 'FileNum': 'FileNum', 'RegNum': 'RegNum', 'UnqSysId': 'UnqSysId', 'CoorType': 'CoorType', 'LatDeg': 'LatDeg', 'LatMin': 'LatMin', 'LatSec': 'LatSec', 'LatDir': 'LatDir', 'LatTot': 'LatTot', 'LonDeg': 'LonDeg', 'LonMin': 'LonMin', 'LonSec': 'LonSec', 'LonDir': 'LonDir', 'LonTot': 'LonTot', 'ArrTowPos': 'ArrTowPos', 'ArrTotTow': 'ArrTotTow', 'LatStr': 'LatStr', 'LonStr': 'LonStr', 'DDLat': 'DDLat', 'DDLon': 'DDLon', 'OID_1': 'OID_1', 'RecType_1': 'RecType_1', 'AppPurp': 'AppPurp', 'PrePurp': 'PrePurp', 'InSrcCode': 'InSrcCode', 'StatCode': 'StatCode', 'DateEnt': 'DateEnt', 'DateRec': 'DateRec', 'DateIss': 'DateIss', 'DateCon': 'DateCon', 'DateDis': 'DateDis', 'DateAct': 'DateAct', 'ArcFlag': 'ArcFlag', 'Version': 'Version', 'SigFirst': 'SigFirst', 'SigMid': 'SigMid', 'SigLast': 'SigLast', 'SigSuff': 'SigSuff', 'SigTitle': 'SigTitle', 'InvSig': 'InvSig', 'Street': 'Street', 'City': 'City', 'State': 'State', 'County': 'County', 'Zip': 'Zip', 'Height': 'Height', 'GrndElv': 'GrndElv', 'AbvGrndHgh': 'AbvGrndHgh', 'HeightAMSL': 'HeightAMSL', 'StructType': 'StructType', 'DateFAA': 'DateFAA', 'FAAStudNum': 'FAAStudNum', 'FAACircNum': 'FAACircNum', 'SpecOpt': 'SpecOpt', 'PaintLight': 'PaintLight', 'PropMarkLi': 'PropMarkLi', });
lyr_Buffered_4.set('fieldAliases', {'fid': 'fid', 'RecType': 'RecType', 'ContInd': 'ContInd', 'FileNum': 'FileNum', 'RegNum': 'RegNum', 'UnqSysId': 'UnqSysId', 'CoorType': 'CoorType', 'LatDeg': 'LatDeg', 'LatMin': 'LatMin', 'LatSec': 'LatSec', 'LatDir': 'LatDir', 'LatTot': 'LatTot', 'LonDeg': 'LonDeg', 'LonMin': 'LonMin', 'LonSec': 'LonSec', 'LonDir': 'LonDir', 'LonTot': 'LonTot', 'ArrTowPos': 'ArrTowPos', 'ArrTotTow': 'ArrTotTow', 'LatStr': 'LatStr', 'LonStr': 'LonStr', 'DDLat': 'DDLat', 'DDLon': 'DDLon', 'OID_1': 'OID_1', 'RecType_1': 'RecType_1', 'AppPurp': 'AppPurp', 'PrePurp': 'PrePurp', 'InSrcCode': 'InSrcCode', 'StatCode': 'StatCode', 'DateEnt': 'DateEnt', 'DateRec': 'DateRec', 'DateIss': 'DateIss', 'DateCon': 'DateCon', 'DateDis': 'DateDis', 'DateAct': 'DateAct', 'ArcFlag': 'ArcFlag', 'Version': 'Version', 'SigFirst': 'SigFirst', 'SigMid': 'SigMid', 'SigLast': 'SigLast', 'SigSuff': 'SigSuff', 'SigTitle': 'SigTitle', 'InvSig': 'InvSig', 'Street': 'Street', 'City': 'City', 'State': 'State', 'County': 'County', 'Zip': 'Zip', 'Height': 'Height', 'GrndElv': 'GrndElv', 'AbvGrndHgh': 'AbvGrndHgh', 'HeightAMSL': 'HeightAMSL', 'StructType': 'StructType', 'DateFAA': 'DateFAA', 'FAAStudNum': 'FAAStudNum', 'FAACircNum': 'FAACircNum', 'SpecOpt': 'SpecOpt', 'PaintLight': 'PaintLight', 'PropMarkLi': 'PropMarkLi', });
lyr_antenna_structure_registration_mn_5.set('fieldAliases', {'RecType': 'RecType', 'ContInd': 'ContInd', 'FileNum': 'FileNum', 'RegNum': 'RegNum', 'UnqSysId': 'UnqSysId', 'CoorType': 'CoorType', 'LatDeg': 'LatDeg', 'LatMin': 'LatMin', 'LatSec': 'LatSec', 'LatDir': 'LatDir', 'LatTot': 'LatTot', 'LonDeg': 'LonDeg', 'LonMin': 'LonMin', 'LonSec': 'LonSec', 'LonDir': 'LonDir', 'LonTot': 'LonTot', 'ArrTowPos': 'ArrTowPos', 'ArrTotTow': 'ArrTotTow', 'LatStr': 'LatStr', 'LonStr': 'LonStr', 'DDLat': 'DDLat', 'DDLon': 'DDLon', 'OID_1': 'OID_1', 'RecType_1': 'RecType_1', 'AppPurp': 'AppPurp', 'PrePurp': 'PrePurp', 'InSrcCode': 'InSrcCode', 'StatCode': 'StatCode', 'DateEnt': 'DateEnt', 'DateRec': 'DateRec', 'DateIss': 'DateIss', 'DateCon': 'DateCon', 'DateDis': 'DateDis', 'DateAct': 'DateAct', 'ArcFlag': 'ArcFlag', 'Version': 'Version', 'SigFirst': 'SigFirst', 'SigMid': 'SigMid', 'SigLast': 'SigLast', 'SigSuff': 'SigSuff', 'SigTitle': 'SigTitle', 'InvSig': 'InvSig', 'Street': 'Street', 'City': 'City', 'State': 'State', 'County': 'County', 'Zip': 'Zip', 'Height': 'Height', 'GrndElv': 'GrndElv', 'AbvGrndHgh': 'AbvGrndHgh', 'HeightAMSL': 'HeightAMSL', 'StructType': 'StructType', 'DateFAA': 'DateFAA', 'FAAStudNum': 'FAAStudNum', 'FAACircNum': 'FAACircNum', 'SpecOpt': 'SpecOpt', 'PaintLight': 'PaintLight', 'PropMarkLi': 'PropMarkLi', });
lyr_State_Aid_Routes_in_Minnesota_1.set('fieldImages', {'ROUTE_ID': '', 'ROUTE_NAME': '', 'ROUTE_LABE': '', 'ROUTE_SIGN': '', 'ROUTE_SYST': '', 'GNIS_FEATU': '', 'ROUTE_NUMB': '', 'ROUTE_SUFF': '', 'TRAFFIC_DI': '', 'ROUTE_SI_1': '', 'OWNERSHIP': '', 'ROUTE_QUAL': '', 'ROUTE_CARD': '', 'FROM_MEASU': '', 'TO_MEASURE': '', 'SHAPE_Leng': '', });
lyr_Trunk_Highways_in_Minnesota_2.set('fieldImages', {'ROUTE_ID': '', 'ROUTE_NAME': '', 'ROUTE_LABE': '', 'ROUTE_SIGN': '', 'ROUTE_SYST': '', 'GNIS_FEATU': '', 'ROUTE_NUMB': '', 'ROUTE_SUFF': '', 'TRAFFIC_DI': '', 'ROUTE_SI_1': '', 'OWNERSHIP': '', 'ROUTE_QUAL': '', 'ROUTE_CARD': '', 'FROM_MEASU': '', 'TO_MEASURE': '', 'SHAPE_Leng': '', });
lyr_Buffered2_3.set('fieldImages', {'fid': 'TextEdit', 'RecType': 'TextEdit', 'ContInd': 'TextEdit', 'FileNum': 'TextEdit', 'RegNum': 'TextEdit', 'UnqSysId': 'TextEdit', 'CoorType': 'TextEdit', 'LatDeg': 'TextEdit', 'LatMin': 'TextEdit', 'LatSec': 'TextEdit', 'LatDir': 'TextEdit', 'LatTot': 'TextEdit', 'LonDeg': 'TextEdit', 'LonMin': 'TextEdit', 'LonSec': 'TextEdit', 'LonDir': 'TextEdit', 'LonTot': 'TextEdit', 'ArrTowPos': 'TextEdit', 'ArrTotTow': 'TextEdit', 'LatStr': 'TextEdit', 'LonStr': 'TextEdit', 'DDLat': 'TextEdit', 'DDLon': 'TextEdit', 'OID_1': 'TextEdit', 'RecType_1': 'TextEdit', 'AppPurp': 'TextEdit', 'PrePurp': 'TextEdit', 'InSrcCode': 'TextEdit', 'StatCode': 'TextEdit', 'DateEnt': 'DateTime', 'DateRec': 'DateTime', 'DateIss': 'DateTime', 'DateCon': 'DateTime', 'DateDis': 'DateTime', 'DateAct': 'DateTime', 'ArcFlag': 'TextEdit', 'Version': 'TextEdit', 'SigFirst': 'TextEdit', 'SigMid': 'TextEdit', 'SigLast': 'TextEdit', 'SigSuff': 'TextEdit', 'SigTitle': 'TextEdit', 'InvSig': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Zip': 'TextEdit', 'Height': 'TextEdit', 'GrndElv': 'TextEdit', 'AbvGrndHgh': 'TextEdit', 'HeightAMSL': 'TextEdit', 'StructType': 'TextEdit', 'DateFAA': 'DateTime', 'FAAStudNum': 'TextEdit', 'FAACircNum': 'TextEdit', 'SpecOpt': 'TextEdit', 'PaintLight': 'TextEdit', 'PropMarkLi': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {'fid': 'TextEdit', 'RecType': 'TextEdit', 'ContInd': 'TextEdit', 'FileNum': 'TextEdit', 'RegNum': 'TextEdit', 'UnqSysId': 'TextEdit', 'CoorType': 'TextEdit', 'LatDeg': 'TextEdit', 'LatMin': 'TextEdit', 'LatSec': 'TextEdit', 'LatDir': 'TextEdit', 'LatTot': 'TextEdit', 'LonDeg': 'TextEdit', 'LonMin': 'TextEdit', 'LonSec': 'TextEdit', 'LonDir': 'TextEdit', 'LonTot': 'TextEdit', 'ArrTowPos': 'TextEdit', 'ArrTotTow': 'TextEdit', 'LatStr': 'TextEdit', 'LonStr': 'TextEdit', 'DDLat': 'TextEdit', 'DDLon': 'TextEdit', 'OID_1': 'TextEdit', 'RecType_1': 'TextEdit', 'AppPurp': 'TextEdit', 'PrePurp': 'TextEdit', 'InSrcCode': 'TextEdit', 'StatCode': 'TextEdit', 'DateEnt': 'DateTime', 'DateRec': 'DateTime', 'DateIss': 'DateTime', 'DateCon': 'DateTime', 'DateDis': 'DateTime', 'DateAct': 'DateTime', 'ArcFlag': 'TextEdit', 'Version': 'TextEdit', 'SigFirst': 'TextEdit', 'SigMid': 'TextEdit', 'SigLast': 'TextEdit', 'SigSuff': 'TextEdit', 'SigTitle': 'TextEdit', 'InvSig': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Zip': 'TextEdit', 'Height': 'TextEdit', 'GrndElv': 'TextEdit', 'AbvGrndHgh': 'TextEdit', 'HeightAMSL': 'TextEdit', 'StructType': 'TextEdit', 'DateFAA': 'DateTime', 'FAAStudNum': 'TextEdit', 'FAACircNum': 'TextEdit', 'SpecOpt': 'TextEdit', 'PaintLight': 'TextEdit', 'PropMarkLi': 'TextEdit', });
lyr_antenna_structure_registration_mn_5.set('fieldImages', {'RecType': 'TextEdit', 'ContInd': 'TextEdit', 'FileNum': 'TextEdit', 'RegNum': 'TextEdit', 'UnqSysId': 'TextEdit', 'CoorType': 'TextEdit', 'LatDeg': 'TextEdit', 'LatMin': 'TextEdit', 'LatSec': 'TextEdit', 'LatDir': 'TextEdit', 'LatTot': 'TextEdit', 'LonDeg': 'TextEdit', 'LonMin': 'TextEdit', 'LonSec': 'TextEdit', 'LonDir': 'TextEdit', 'LonTot': 'TextEdit', 'ArrTowPos': 'TextEdit', 'ArrTotTow': 'TextEdit', 'LatStr': 'TextEdit', 'LonStr': 'TextEdit', 'DDLat': 'TextEdit', 'DDLon': 'TextEdit', 'OID_1': 'TextEdit', 'RecType_1': 'TextEdit', 'AppPurp': 'TextEdit', 'PrePurp': 'TextEdit', 'InSrcCode': 'TextEdit', 'StatCode': 'TextEdit', 'DateEnt': 'DateTime', 'DateRec': 'DateTime', 'DateIss': 'DateTime', 'DateCon': 'DateTime', 'DateDis': 'DateTime', 'DateAct': 'DateTime', 'ArcFlag': 'TextEdit', 'Version': 'TextEdit', 'SigFirst': 'TextEdit', 'SigMid': 'TextEdit', 'SigLast': 'TextEdit', 'SigSuff': 'TextEdit', 'SigTitle': 'TextEdit', 'InvSig': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'Zip': 'TextEdit', 'Height': 'TextEdit', 'GrndElv': 'TextEdit', 'AbvGrndHgh': 'TextEdit', 'HeightAMSL': 'TextEdit', 'StructType': 'TextEdit', 'DateFAA': 'DateTime', 'FAAStudNum': 'TextEdit', 'FAACircNum': 'TextEdit', 'SpecOpt': 'TextEdit', 'PaintLight': 'TextEdit', 'PropMarkLi': 'TextEdit', });
lyr_State_Aid_Routes_in_Minnesota_1.set('fieldLabels', {'ROUTE_ID': 'no label', 'ROUTE_NAME': 'no label', 'ROUTE_LABE': 'no label', 'ROUTE_SIGN': 'no label', 'ROUTE_SYST': 'no label', 'GNIS_FEATU': 'no label', 'ROUTE_NUMB': 'no label', 'ROUTE_SUFF': 'no label', 'TRAFFIC_DI': 'no label', 'ROUTE_SI_1': 'no label', 'OWNERSHIP': 'no label', 'ROUTE_QUAL': 'no label', 'ROUTE_CARD': 'no label', 'FROM_MEASU': 'no label', 'TO_MEASURE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Trunk_Highways_in_Minnesota_2.set('fieldLabels', {'ROUTE_ID': 'no label', 'ROUTE_NAME': 'no label', 'ROUTE_LABE': 'no label', 'ROUTE_SIGN': 'no label', 'ROUTE_SYST': 'no label', 'GNIS_FEATU': 'no label', 'ROUTE_NUMB': 'no label', 'ROUTE_SUFF': 'no label', 'TRAFFIC_DI': 'no label', 'ROUTE_SI_1': 'no label', 'OWNERSHIP': 'no label', 'ROUTE_QUAL': 'no label', 'ROUTE_CARD': 'no label', 'FROM_MEASU': 'no label', 'TO_MEASURE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Buffered2_3.set('fieldLabels', {'fid': 'no label', 'RecType': 'no label', 'ContInd': 'no label', 'FileNum': 'no label', 'RegNum': 'no label', 'UnqSysId': 'no label', 'CoorType': 'no label', 'LatDeg': 'no label', 'LatMin': 'no label', 'LatSec': 'no label', 'LatDir': 'no label', 'LatTot': 'no label', 'LonDeg': 'no label', 'LonMin': 'no label', 'LonSec': 'no label', 'LonDir': 'no label', 'LonTot': 'no label', 'ArrTowPos': 'no label', 'ArrTotTow': 'no label', 'LatStr': 'no label', 'LonStr': 'no label', 'DDLat': 'no label', 'DDLon': 'no label', 'OID_1': 'no label', 'RecType_1': 'no label', 'AppPurp': 'no label', 'PrePurp': 'no label', 'InSrcCode': 'no label', 'StatCode': 'no label', 'DateEnt': 'no label', 'DateRec': 'no label', 'DateIss': 'no label', 'DateCon': 'no label', 'DateDis': 'no label', 'DateAct': 'no label', 'ArcFlag': 'no label', 'Version': 'no label', 'SigFirst': 'no label', 'SigMid': 'no label', 'SigLast': 'no label', 'SigSuff': 'no label', 'SigTitle': 'no label', 'InvSig': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'County': 'no label', 'Zip': 'no label', 'Height': 'no label', 'GrndElv': 'no label', 'AbvGrndHgh': 'no label', 'HeightAMSL': 'no label', 'StructType': 'no label', 'DateFAA': 'no label', 'FAAStudNum': 'no label', 'FAACircNum': 'no label', 'SpecOpt': 'no label', 'PaintLight': 'no label', 'PropMarkLi': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'fid': 'no label', 'RecType': 'no label', 'ContInd': 'no label', 'FileNum': 'no label', 'RegNum': 'no label', 'UnqSysId': 'no label', 'CoorType': 'no label', 'LatDeg': 'no label', 'LatMin': 'no label', 'LatSec': 'no label', 'LatDir': 'no label', 'LatTot': 'no label', 'LonDeg': 'no label', 'LonMin': 'no label', 'LonSec': 'no label', 'LonDir': 'no label', 'LonTot': 'no label', 'ArrTowPos': 'no label', 'ArrTotTow': 'no label', 'LatStr': 'no label', 'LonStr': 'no label', 'DDLat': 'no label', 'DDLon': 'no label', 'OID_1': 'no label', 'RecType_1': 'no label', 'AppPurp': 'no label', 'PrePurp': 'no label', 'InSrcCode': 'no label', 'StatCode': 'no label', 'DateEnt': 'no label', 'DateRec': 'no label', 'DateIss': 'no label', 'DateCon': 'no label', 'DateDis': 'no label', 'DateAct': 'no label', 'ArcFlag': 'no label', 'Version': 'no label', 'SigFirst': 'no label', 'SigMid': 'no label', 'SigLast': 'no label', 'SigSuff': 'no label', 'SigTitle': 'no label', 'InvSig': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'County': 'no label', 'Zip': 'no label', 'Height': 'no label', 'GrndElv': 'no label', 'AbvGrndHgh': 'no label', 'HeightAMSL': 'no label', 'StructType': 'no label', 'DateFAA': 'no label', 'FAAStudNum': 'no label', 'FAACircNum': 'no label', 'SpecOpt': 'no label', 'PaintLight': 'no label', 'PropMarkLi': 'no label', });
lyr_antenna_structure_registration_mn_5.set('fieldLabels', {'RecType': 'no label', 'ContInd': 'no label', 'FileNum': 'no label', 'RegNum': 'no label', 'UnqSysId': 'no label', 'CoorType': 'no label', 'LatDeg': 'no label', 'LatMin': 'no label', 'LatSec': 'no label', 'LatDir': 'no label', 'LatTot': 'no label', 'LonDeg': 'no label', 'LonMin': 'no label', 'LonSec': 'no label', 'LonDir': 'no label', 'LonTot': 'no label', 'ArrTowPos': 'no label', 'ArrTotTow': 'no label', 'LatStr': 'no label', 'LonStr': 'no label', 'DDLat': 'no label', 'DDLon': 'no label', 'OID_1': 'no label', 'RecType_1': 'no label', 'AppPurp': 'no label', 'PrePurp': 'no label', 'InSrcCode': 'no label', 'StatCode': 'no label', 'DateEnt': 'no label', 'DateRec': 'no label', 'DateIss': 'no label', 'DateCon': 'no label', 'DateDis': 'no label', 'DateAct': 'no label', 'ArcFlag': 'no label', 'Version': 'no label', 'SigFirst': 'no label', 'SigMid': 'no label', 'SigLast': 'no label', 'SigSuff': 'no label', 'SigTitle': 'no label', 'InvSig': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'County': 'no label', 'Zip': 'no label', 'Height': 'no label', 'GrndElv': 'no label', 'AbvGrndHgh': 'no label', 'HeightAMSL': 'no label', 'StructType': 'no label', 'DateFAA': 'no label', 'FAAStudNum': 'no label', 'FAACircNum': 'no label', 'SpecOpt': 'no label', 'PaintLight': 'no label', 'PropMarkLi': 'no label', });
lyr_antenna_structure_registration_mn_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});