package ec.edu.uce.pa.activities;

import android.content.Intent;
import android.opengl.GLSurfaceView;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import ec.edu.uce.pa.GrupalAstros.RenderSistemaSolar;
import ec.edu.uce.pa.GrupalAstros.RenderSistemaSolarMaterial;
import ec.edu.uce.pa.R;
import ec.edu.uce.pa.renderers.RenderCarro;
import ec.edu.uce.pa.renderers.RenderCirculo;
import ec.edu.uce.pa.renderers.RenderColores;
import ec.edu.uce.pa.renderers.RenderCuadradoBlend;
import ec.edu.uce.pa.renderers.RenderCuadradoMipMap;
import ec.edu.uce.pa.renderers.RenderCuboLookAtCamera;
import ec.edu.uce.pa.renderers.RenderCuboNeblina;
import ec.edu.uce.pa.renderers.RenderCuboRubik;
import ec.edu.uce.pa.renderers.RenderDepthTest;
import ec.edu.uce.pa.renderers.RenderEsfera;
import ec.edu.uce.pa.renderers.RenderFiguras;
import ec.edu.uce.pa.renderers.RenderGrupalCamarasAntiguo;
import ec.edu.uce.pa.renderers.RenderLuzLampara;
import ec.edu.uce.pa.renderers.RenderObjModel;
import ec.edu.uce.pa.renderers.RenderPiramideTextura;
import ec.edu.uce.pa.renderers.RenderPlanoMaterial;
import ec.edu.uce.pa.renderers.RenderPunto;
import ec.edu.uce.pa.renderers.RenderPushPop;
import ec.edu.uce.pa.renderers.RenderSpotLight;
import ec.edu.uce.pa.renderers.RenderTierraLuces;
import ec.edu.uce.pa.renderers.RenderTriangulo;

public class OpenGL10Activity extends AppCompatActivity {
    private GLSurfaceView view;
    private GLSurfaceView.Renderer renderer;


    public static int numPrimitivas = 0;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_opengl_10);

        view = new GLSurfaceView(this);
        view.setEGLContextClientVersion(1);

        renderer = null;

        //Hacer invisible la input
        findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);


        //input numero de primitivas a dibujar
        EditText inputNumPrimitivas = (EditText) findViewById(R.id.inputNumPrimitivas);

        Button btnDibujar = findViewById(R.id.btnDibujar);
        btnDibujar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {//SE CAMBIO View view por View a
                renderer = null;

                int optionSel;
                RadioGroup rgOpciones = findViewById(R.id.rgOpciones);
                optionSel = rgOpciones.getCheckedRadioButtonId();

                if (optionSel > 0) {

                    if (optionSel == R.id.rbColorFijo) {
                        renderer = new RenderColores();
                    }
                    if (optionSel == R.id.rbPuntos) {
                        renderer = new RenderPunto();//REVISAR
                    }
                    if (optionSel == R.id.rbCasa) {
                        renderer = new RenderTriangulo();//REVISAR
                    }
                    if (optionSel == R.id.rbCirculo) {
                        renderer = new RenderCirculo();//REVISAR
                    }
                    if (optionSel == R.id.rbCarro) {
                        renderer = new RenderCarro();
                    }
                    if (optionSel == R.id.rbPushPop) {
                        renderer = new RenderPushPop();
                    }
                    if (optionSel == R.id.rbCubo) {
                        renderer = new RenderCuboLookAtCamera();
                    }
                    if (optionSel == R.id.rbCuboRubik) {
                        renderer = new RenderCuboRubik();
                    }
                    if (optionSel == R.id.rbDeptTest) {
                        renderer = new RenderDepthTest();
                    }
                    if (optionSel == R.id.rbCuboMovTeclado) {
                        Intent intent = new Intent(view.getContext(), TrabajoFiguras.class);
                        startActivity(intent);
                        finish();
                        return;
                    }
                    if (optionSel == R.id.rbEsfera) {
                        renderer = new RenderEsfera();
                    }
                    if (optionSel == R.id.rbPlanosIluminacion) {
                        renderer = new RenderPlanoMaterial();
                    }
                    if (optionSel == R.id.rbFiguras3d) {//12
                        renderer = new RenderFiguras();
                    }
                    if (optionSel == R.id.rbObjModel) {//12
                        renderer = new RenderObjModel(getApplicationContext());
                    }
                    if (optionSel == R.id.rbSpotLightAnimada) {//13
                        renderer = new RenderTierraLuces(getApplicationContext());
                    }
                    if (optionSel == R.id.rbSpotLightAnimada) {//13
                        renderer = new RenderSpotLight();
                    }
                    if (optionSel == R.id.rbUniversoEscalaMateriales) {//14
                        renderer = new RenderSistemaSolarMaterial();//REVISAR
                    }
                    if (optionSel == R.id.rbUniversoEscalaTexturas) {//15
                        renderer = new RenderSistemaSolar(getApplicationContext());//REVISAR
                    }
                    if (optionSel == R.id.rbBlending) {//16
                        renderer = new RenderCuadradoBlend(getApplicationContext());
                    }
                    if (optionSel == R.id.rbPiramideTextura) {//17
                        renderer = new RenderPiramideTextura(getApplicationContext());
                    }
                    if (optionSel == R.id.rbMipMap) {//18
                        renderer = new RenderCuadradoMipMap(getApplicationContext());
                    }
                    if (optionSel == R.id.rbNeblina) {//19
                        renderer = new RenderCuboNeblina();//REVISAR
                    }
                    if (optionSel == R.id.rbLinternaPlano) {//20
                        renderer = new RenderLuzLampara(getApplicationContext());
                    }


                    view.setRenderer(renderer);
                    setContentView(view);

                } else {
                    Toast.makeText(OpenGL10Activity.this, "Seleccione una figura", Toast.LENGTH_SHORT).show();
                }

                //input numero de primitivas a dibujar -> int
                try {
                    numPrimitivas = Integer.parseInt(inputNumPrimitivas.getText().toString());
                } catch (NumberFormatException e) {
                    numPrimitivas = 0;
                }


            }
        });

        Button btnSalir = findViewById(R.id.btnSalir);
        btnSalir.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(view.getContext(), MenuActivity.class);
                startActivity(intent);
                finish();

            }
        });

        RadioButton rbPantalla = findViewById(R.id.rbColorFijo);
        rbPantalla.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });


        RadioButton rbPunto = findViewById(R.id.rbPuntos);
        rbPunto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                inputNumPrimitivas.setHint("Puntos a dibujar| Max:12");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.VISIBLE);
            }
        });

        RadioButton rbCasa = findViewById(R.id.rbCasa);
        rbCasa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                //inputNumPrimitivas.setHint("Cantidad a dibujar");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });


        RadioButton rbCirculo = findViewById(R.id.rbCirculo);
        rbCirculo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                //inputNumPrimitivas.setHint("Segmentos para el circulo");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbCarro = findViewById(R.id.rbCarro);
        rbCarro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbPushPop = findViewById(R.id.rbPushPop);
        rbPushPop.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });


        RadioButton rbCubo = findViewById(R.id.rbCubo);
        rbCubo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbCuboRubik = findViewById(R.id.rbCuboRubik);
        rbCuboRubik.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbDeptTest = findViewById(R.id.rbDeptTest);
        rbDeptTest.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbCuboMovTeclado = findViewById(R.id.rbCuboMovTeclado);
        rbCuboMovTeclado.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbEsfera = findViewById(R.id.rbEsfera);
        rbEsfera.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbPlanosIluminacion = findViewById(R.id.rbPlanosIluminacion);
        rbPlanosIluminacion.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbFiguras3d = findViewById(R.id.rbFiguras3d);
        rbFiguras3d.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbObjModel = findViewById(R.id.rbObjModel);
        rbObjModel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbSpotLightAnimada = findViewById(R.id.rbSpotLightAnimada);
        rbSpotLightAnimada.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbUniversoEscalaMateriales = findViewById(R.id.rbUniversoEscalaMateriales);
        rbUniversoEscalaMateriales.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbUniversoEscalaTexturas = findViewById(R.id.rbUniversoEscalaTexturas);
        rbUniversoEscalaTexturas.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbBlending = findViewById(R.id.rbBlending);
        rbBlending.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbPiramideTextura = findViewById(R.id.rbPiramideTextura);
        rbPiramideTextura.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbMipMap = findViewById(R.id.rbMipMap);
        rbMipMap.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbNeblina = findViewById(R.id.rbNeblina);
        rbNeblina.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

        RadioButton rbLinternaPlano = findViewById(R.id.rbLinternaPlano);
        rbLinternaPlano.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //inputNumPrimitivas.setHint("Puntos para cada rueda");
                findViewById(R.id.inputNumPrimitivas).setVisibility(View.INVISIBLE);
            }
        });

    }

    //Metodo para detectar las teclas y manejar los movimientos de camara,mundo:
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        //Tecla derecha:
        if (keyCode == KeyEvent.KEYCODE_DPAD_RIGHT) {
            //Toast.makeText(this, "[Girando derecha]", Toast.LENGTH_SHORT).show();
            RenderFiguras.anguloSigno = 1;
            RenderFiguras.rx = 0f;
            RenderFiguras.ry = 1f;
            RenderFiguras.rz = 0f;

            RenderGrupalCamarasAntiguo.ejex = 1;
            RenderGrupalCamarasAntiguo.ejey = 0;
            RenderGrupalCamarasAntiguo.ejez = 1;
            return true;
        }
        //Tecla izquierda:
        if (keyCode == KeyEvent.KEYCODE_DPAD_LEFT) {
            //Toast.makeText(this, "[Girando izquierda]", Toast.LENGTH_SHORT).show();
            RenderFiguras.anguloSigno = -1;
            RenderFiguras.rx = 0f;
            RenderFiguras.ry = 1f;
            RenderFiguras.rz = 0f;

            RenderGrupalCamarasAntiguo.ejex = 1;
            RenderGrupalCamarasAntiguo.ejey = 0;
            RenderGrupalCamarasAntiguo.ejez = 1;
            return true;
        }
        //Tecla abajo:
        if (keyCode == KeyEvent.KEYCODE_DPAD_DOWN) {
            //Toast.makeText(this, "[Girando abajo]", Toast.LENGTH_SHORT).show();
            RenderFiguras.anguloSigno = 1;
            RenderFiguras.rx = 1f;
            RenderFiguras.ry = 0f;
            RenderFiguras.rz = 0f;

            RenderGrupalCamarasAntiguo.ejex = 0;
            RenderGrupalCamarasAntiguo.ejey = 1;
            RenderGrupalCamarasAntiguo.ejez = 1;
            return true;
        }
        //Tecla arriba:
        if (keyCode == KeyEvent.KEYCODE_DPAD_UP) {
            //Toast.makeText(this, "[Girando arriba]", Toast.LENGTH_SHORT).show();
            RenderFiguras.anguloSigno = -1;
            RenderFiguras.rx = 1f;
            RenderFiguras.ry = 0f;
            RenderFiguras.rz = 0f;

            RenderGrupalCamarasAntiguo.ejex = 0;
            RenderGrupalCamarasAntiguo.ejey = 1;
            RenderGrupalCamarasAntiguo.ejez = 1;
            return true;
        }

        return super.onKeyDown(keyCode, event);
    }

    private float x1, x2, y1, y2;
    private static final int MIN_DISTANCE = 150;

    //Metodo para detectar las GESTOS en pantalla y manejar los movimientos de camara,mundo:
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                x1 = event.getX();
                y1 = event.getY();
                break;
            case MotionEvent.ACTION_UP:
                x2 = event.getX();
                y2 = event.getY();
                float deltaX = x2 - x1;
                float deltaY = y2 - y1;

                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    if (Math.abs(deltaX) > MIN_DISTANCE) {
                        if (deltaX > 0) {
                            // Deslizamiento hacia la derecha detectado
                            //Toast.makeText(this, "[Girando derecha]", Toast.LENGTH_SHORT).show();
                            RenderFiguras.anguloSigno = 1;
                            RenderFiguras.rx = 0f;
                            RenderFiguras.ry = 1f;
                            RenderFiguras.rz = 0f;

                        } else {
                            // Deslizamiento hacia la izquierda detectado
                            //Toast.makeText(this, "[Girando izquierda]", Toast.LENGTH_SHORT).show();
                            RenderFiguras.anguloSigno = -1;
                            RenderFiguras.rx = 0f;
                            RenderFiguras.ry = 1f;
                            RenderFiguras.rz = 0f;

                        }
                    }
                } else {
                    if (Math.abs(deltaY) > MIN_DISTANCE) {
                        if (deltaY > 0) {
                            // Deslizamiento hacia abajo detectado
                            //Toast.makeText(this, "[Girando abajo]", Toast.LENGTH_SHORT).show();
                            RenderFiguras.anguloSigno = 1;
                            RenderFiguras.rx = 1f;
                            RenderFiguras.ry = 0f;
                            RenderFiguras.rz = 0f;

                        } else {
                            // Deslizamiento hacia arriba detectado
                            //Toast.makeText(this, "[Girando arriba]", Toast.LENGTH_SHORT).show();
                            RenderFiguras.anguloSigno = -1;
                            RenderFiguras.rx = 1f;
                            RenderFiguras.ry = 0f;
                            RenderFiguras.rz = 0f;

                        }
                    }
                }
                break;
        }
        return true;
    }


    //Boton Back de Android
    @Override
    public void onBackPressed() {
        Intent intent = new Intent(OpenGL10Activity.this, OpenGL10Activity.class);
        startActivity(intent);
        finish();
    }
}
