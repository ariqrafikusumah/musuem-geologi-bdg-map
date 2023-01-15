import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Typography,
    Select,
    Option,
    Button,
    Textarea,
    Radio,
    Checkbox,
} from "@material-tailwind/react";
import axios from "axios";

export function Batuanedit() {
    const url = "https://sbc-sebatcabut.herokuapp.com";
    const [formData, setFormData] = useState({
        id: "639ac7f63153ff7083d5b797",
        no_register: "MGB-00002938",
        no_inventaris: "BSE00000001",
        kode_bmn: "6.06.01.05.005",
        nup_bmn: "0",
        merk_bmn: "Batuan",
        satuan: "Buah",
        kelompok_koleksi: "Batuan",
        jenis_koleksi: "Sedimen",
        sub_jenis_koleksi: "-",
        kode_jenis_koleksi: "BSE",
        ruang_simpan: "Gudang 3",
        lokasi_simpan: "31070101",
        kondisi: "B/Baik",
        nama_koleksi: "Batugamping",
        keterangan: "Batuan Sedimen (Klastik)",
        nama_formasi: "Bojongmanik",
        lokasi_temuan: "Desa Ujungjaya, Kec. Sumur, Kab. Pandeglang",
        koordinat: "Lat/Lon: 6� 49' 31.1268\" S, 105� 28' 35.5764\" E",
        pulau: "Jawa",
        peta: "Geologi",
        lembar_peta: "Ujungkulon",
        skala: "1:100000",
        cara_perolehan: "Penyelidikan geologi",
        tahun_perolehan: "2012",
        kolektor: "mamang garok",
        kepemilikan: "Museum Geologi Bandung",
        operator: "Administrator",
        tanggal_dicatat: "12/12/2022 6:57",
        nilai_perolehan: "-",
        nilai_buku: "-",
        foto: "test.jpg",
        foto_2: "testB.jpg",
        foto_3: "testC.jpg"
    });

    const [errors, setErrors] = useState({});

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: '' });
    }
    const validate = () => {
        const newErrors = {};
        if (!formData.nup_bmn) {
            newErrors.nup_bmn = "NUP BMN is required", alert('NUP BMN is required');
        }
        return newErrors;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            axios.post(url + '/batuan', formData)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    return (
        <Card className="mb-12">
            <form onSubmit={handleSubmit} >
                <div className="">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        className="lg:w-1/3 w-full">
                        <Typography className="" variant="h3">
                            Batuan
                        </Typography>
                    </CardHeader>
                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Kategori BMN *
                            </Typography>
                            <Select className="w-full shadow-lg" label="Pilih Kategori BMN" name="kode_bmn" onChange={handleChange} required>
                                <Option value="6.02.02.99.999">6.02.02.99.999</Option>
                                <Option>6.06.01.05.005</Option>
                                <Option>6.06.01.06.001</Option>
                            </Select>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                NUP BMN
                            </Typography>
                            <div className="w-full">
                                <Input
                                    label="NUP BMN"
                                    name="nup_bmn"
                                    id="nup_bmn"
                                    onChange={handleChange}
                                />
                                {errors.nup_bmn && <p style={{ color: "red" }}>{errors.nup_bmn}</p>}
                            </div>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Tipe BMN
                            </Typography>
                            <Input
                                name="no_register"
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                No Awal
                            </Typography>
                            <Input
                                name="no_inventaris"
                                onChange={handleChange}
                                label="No Awal"
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Satuan
                            </Typography>
                            <Select className="w-full shadow-lg" label="Pilih Satuan" name="satuan" onChange={handleChange} id="satuan">
                                <Option value="Buah">Buah</Option>
                                <Option value="Unit">Unit</Option>
                                <Option value="Set">Set</Option>
                            </Select>
                        </div>

                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Kelompok Koleksi
                            </Typography>
                            <Input
                                label="Batuan"
                                name="kelompok_koleksi"
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Jenis Koleksi *
                            </Typography>
                            <Select className="shadow-lg" label="Pilih Jenis Koleksi" name="jenis_koleksi" onChange={handleChange}>
                                <Option value="Beku">Beku</Option>
                                <Option>Impaktit</Option>
                                <Option>Mineral</Option>
                                <Option>Metamorf</Option>
                                <Option>Meteorit</Option>
                                <Option>Meteorit</Option>
                                <Option>Piroklasktik</Option>
                                <Option>Tidak Terindentifikasi</Option>
                            </Select>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Sub Jenis Koleksi
                            </Typography>
                            <Input
                                className=""
                                Label=""
                                name="sub_jenis_koleksi"
                                onChange={handleChange}
                                disabled
                            >
                            </Input>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Kode Jenis Koleksi
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label=""
                                name="kode_jenis_koleksi"
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Ruang Penyimpanan
                            </Typography>
                            <div className="grid grid-rows-1 grid-flow-col gap-4">
                                <Radio id="dalamnegeri" name="ruang_simpan" label="Storage" onChange={handleChange}/>
                                <Radio id="nonstorage" name="ruang_simpan" label="Non Storage" onChange={handleChange}/>
                            </div>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Lokasi Penyimpanan :
                            </Typography>
                            <Select className="shadow-lg" label="Pilih Storage" name="lokasi_simpan" onChange={handleChange}>
                                <Option value="1">1</Option>
                                <Option>2</Option>
                                <Option>3</Option>
                                <Option>4</Option>
                                <Option>5</Option>
                                <Option>6</Option>
                                <Option>7</Option>
                                <Option>8</Option>
                                <Option>9</Option>
                                <Option>10</Option>
                                <Option>11</Option>
                                <Option>12</Option>
                                <Option>13</Option>
                                <Option>14</Option>
                                <Option>15</Option>
                            </Select>
                            <Select className="shadow-lg" label="Pilih Lantai">
                                <Option value="1">1</Option>
                                <Option>2</Option>
                                <Option>3</Option>
                                <Option>4</Option>
                                <Option>5</Option>
                                <Option>6</Option>
                                <Option>7</Option>
                                <Option>8</Option>
                                <Option>9</Option>
                                <Option>10</Option>
                                <Option>11</Option>
                                <Option>12</Option>
                                <Option>13</Option>
                                <Option>14</Option>
                                <Option>15</Option>
                            </Select>
                            <Select className="shadow-lg" label="Pilih Lajur">
                                <Option>01</Option>
                                <Option>02</Option>
                                <Option>03</Option>
                                <Option>04</Option>
                                <Option>05</Option>
                                <Option>06</Option>
                                <Option>07</Option>
                                <Option>08</Option>
                                <Option>09</Option>
                                <Option>10</Option>
                                <Option>11</Option>
                                <Option>12</Option>
                                <Option>13</Option>
                                <Option>14</Option>
                                <Option>15</Option>
                            </Select>
                            <Select className="shadow-lg" label="Pilih Laci">
                                <Option>01</Option>
                                <Option>02</Option>
                                <Option>03</Option>
                                <Option>04</Option>
                                <Option>05</Option>
                                <Option>06</Option>
                                <Option>07</Option>
                                <Option>08</Option>
                                <Option>09</Option>
                                <Option>10</Option>
                                <Option>11</Option>
                                <Option>12</Option>
                                <Option>13</Option>
                                <Option>14</Option>
                                <Option>15</Option>
                            </Select>
                            <Input
                                className=""
                                label="Slot"
                            >
                            </Input>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Kondisi
                            </Typography>
                            <Select className="shadow-lg" label="Pilih Jenis Koleksi" name="kondisi" onChange={handleChange}>
                                <Option value="B - Baik">B - BAIK</Option>
                                <Option>RR - Rusak Ringan</Option>
                                <Option>RB - Rusak Berat</Option>
                            </Select>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Nama Koleksi
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Nama Koleksi"
                                name="nama_koleksi"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Deskripsi Koleksi
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Deskripsi Koleksi"
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Keterangan
                            </Typography>
                            <Textarea
                                className="grid justify-items-start"
                                label="Keterangan"
                                id="keterangan"
                                name="keterangan"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Umur Geologi
                            </Typography>
                            <Select className="shadow-lg" label="Pilih Umur Geologi">
                                <Option value="Prakambrium">Prakambrium</Option>
                                <Option value="Paleozoikum - Kambrium">Paleozoikum - Kambrium</Option>
                                <Option value="Paleozoikum - Ordovium">Paleozoikum - Ordovium</Option>
                                <Option value="Paleozoikum - Silur">Paleozoikum - Silur</Option>
                                <Option value="Paleozoikum - Devon">Paleozoikum - Devon</Option>
                                <Option value="Paleozoikum - Karbon">Paleozoikum - Karbon</Option>
                                <Option value="Paleozoikum - Perem">Paleozoikum - Perem</Option>
                                <Option value="Mesozoikum  - Trias">Mesozoikum  - Trias</Option>
                                <Option value="Mesozoikum  - Jura">Mesozoikum  - Jura</Option>
                                <Option value="Mesozoikum  - Kapur">Mesozoikum  - Kapur</Option>
                                <Option value="Kenozoikum  - Paleogen">Kenozoikum  - Paleogen</Option>
                                <Option value="Kenozoikum  - Eosen">Kenozoikum  - Eosen</Option>
                                <Option value="Kenozoikum  - Oligosen">Kenozoikum  - Oligosen</Option>
                                <Option value="Kenozoikum  - Miosen">Kenozoikum  - Miosen</Option>
                                <Option value="Kenozoikum  - Pliosen">Kenozoikum  - Pliosen</Option>
                                <Option value="Kenozoikum  - Plistosen">Kenozoikum  - Plistosen</Option>
                                <Option value="Kenozoikum  - Holosen">Kenozoikum  - Holosen</Option>
                            </Select>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Nama Formasi
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Nama Formasi"
                                name="nama_formasi"
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Ditemukan :
                            </Typography>
                            <div className="grid grid-rows-1 grid-flow-col gap-4">
                                <Radio id="dalamnegeri" name="type" label="Dalam Negeri" />
                                <Radio id="luarnegeri" name="type" label="Luar Negeri" />
                                <Radio id="nn" name="type" label="NN" defaultChecked />
                            </div>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Pulau
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Pulau"
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Lokasi Temuan :
                            </Typography>
                            <Select className="shadow-lg" label="Pilih Provinsi" name="pulau" onChange={handleChange}>
                                <Option value="Jawa Barat">Jawa Barat</Option>
                                <Option>Jawa Tengah</Option>
                                <Option>Jawa Timur</Option>
                            </Select>
                            <Select className="shadow-lg" label="Pilih Kabupaten/Kota" name="lokasi_temuan" onChange={handleChange}>
                                <Option value="Bandung">Bandung</Option>
                                <Option>Bekasi</Option>
                                <Option>Jakarta</Option>
                            </Select>
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Alamat Lengkap :
                            </Typography>
                            <Textarea
                                className="grid justify-items-start"
                                label="Alamat"
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                            <Typography
                                className="justify-start w-max md:md-inset-0"
                                variant="h6"
                            >
                                Kordinat :
                            </Typography>
                            <div>
                                <Typography>
                                    Latitude
                                </Typography>
                                <Input
                                    className="shadow-lg"
                                    label="Latitude"
                                    name="koordinat"
                                    onChange={handleChange}
                                >
                                </Input>
                            </div>
                            <div>
                                <Typography>
                                    Longitude
                                </Typography>
                                <Input
                                    className="shadow-lg"
                                    label="Longitude"
                                >
                                </Input>
                            </div>
                            <div>
                                <Typography>
                                    Elevasi
                                </Typography>
                                <Input
                                    className="shadow-lg"
                                    label="Elevasi"
                                >
                                </Input>
                            </div>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Peta
                            </Typography>
                            <div className="grid grid-rows-2 grid-flow-col gap-4">
                                <Checkbox id="1" value="Rupa Bumi" label="Rupa Bumi" name="peta" onChange={handleChange}/>
                                <Checkbox id="2" label="Geologi" />
                                <Checkbox id="3" label="Blad" />
                                <Checkbox id="4" label="Luar Negeri" />
                            </div>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Skala
                            </Typography>
                            <Select className="w-full shadow-lg" label="Pilh Skala Peta" name="skala" onChange={handleChange}>
                                <Option>1:50.000</Option>
                                <Option>1:100.000</Option>
                                <Option>1:250.000</Option>
                            </Select>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Lembar Peta
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Lembar Peta"
                                name="lembar_peta"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Cara Perolehan
                            </Typography>
                            <Select className="shadow-lg" label="Pilih Cara Perolehan" name="cara_perolehan" onChange={handleChange}>
                                <Option value="Pembuatan">Pembuatan</Option>
                                <Option>Pembelian</Option>
                                <Option>Hibah</Option>
                                <Option>Penyelidikan Geologi</Option>
                            </Select>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Tahun Perolehan
                            </Typography>
                            <Input
                                className=""
                                label="Tahun Perolehan"
                                name="tahun_perolehan"
                                onChange={handleChange}
                            >
                            </Input>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Determinator
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Determinator"
                                name="operator"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Kolektor
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Kolektor"
                                name="kolektor"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Kepemilikan Awal
                            </Typography>
                            <Select className="shadow-lg" label="Pilih Kepemilikan Awal" name="kepemilikan" onChange={handleChange}>
                                <Option value="Museum Geologi Bandung">Musuem Geologi Bandung</Option>
                                <Option>Dienst van den Mijnbouw</Option>
                                <Option>-</Option>
                            </Select>
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Publikasi
                            </Typography>
                            <Textarea
                                className="grid justify-items-start"
                                label="Publikasi"
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                URL
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="URL"
                                name="tanggal_dicatat"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Nilai Perolehan
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Nilai Perolehan"
                                name="nilai_perolehan"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Nilai Buku
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                label="Nilai Buku"
                                name="nilai_buku"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Gambar 1
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                type="file"
                                name="foto"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Gambar 2
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                type="file"
                                name="foto_2"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>

                    <CardBody>
                        <div className="flex justify-start">
                            <Typography
                                className="justify-start w-60 md:md-inset-0"
                                variant="h6"
                            >
                                Gambar 3
                            </Typography>
                            <Input
                                className="grid justify-items-start"
                                type="file"
                                name="foto_3"
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>


                    <CardBody>
                        <div className="flex w-max gap-4">
                            <Button
                                variant="outlined"
                                color="red"
                            >
                                Reset
                            </Button>
                            <Button
                                className=""
                                variant="outlined"
                                type="submit"
                            >
                                Simpan
                            </Button>
                        </div>
                    </CardBody>

                </div>
            </form>
        </Card>
    );
}

export default Batuanedit;